import { getPointerArrayConstructor } from "./utils/getPointerArrayConstructor";
import { PointerArray } from "./utils/PointerArray";

export class LRUCache<K extends keyof any, V> {
  private forward: PointerArray;
  private backward: PointerArray;
  private deleted: PointerArray;

  private keys: K[];
  private values: V[];

  public size = 0;
  private deletedSize = 0;
  private head = 0;
  private tail = 0;

  private items: Record<K, number> = {} as Record<K, number>;

  constructor(public readonly capacity: number) {
    if (typeof capacity !== "number" || !isFinite(capacity) || Math.floor(capacity) !== capacity || capacity <= 0)
      throw new Error("@aws-sdk/lru-cache: capacity should be a finite positive integer.");

    const PointerArrayCtor = getPointerArrayConstructor(capacity);
    this.forward = new PointerArrayCtor(capacity);
    this.backward = new PointerArrayCtor(capacity);
    this.deleted = new PointerArrayCtor(capacity);

    this.keys = new Array(capacity);
    this.values = new Array(capacity);
  }

  /**
   * Method used to splay a value on top.
   */
  private splayOnTop(pointer: number) {
    const oldHead = this.head;

    if (this.head === pointer) return this;

    const previous = this.backward[pointer];
    const next = this.forward[pointer];

    if (this.tail === pointer) {
      this.tail = previous;
    } else {
      this.backward[next] = previous;
    }

    this.forward[previous] = next;

    this.backward[oldHead] = pointer;
    this.head = pointer;
    this.forward[pointer] = oldHead;

    return this;
  }

  /**
   * Method used to set the value for the given key in the cache.
   */
  set(key: K, value: V) {
    // The key already exists, we just need to update the value and splay on top
    let pointer = this.items[key];

    if (typeof pointer !== "undefined") {
      this.splayOnTop(pointer);
      this.values[pointer] = value;
      return;
    }

    // The cache is not yet full
    if (this.size < this.capacity) {
      if (this.deletedSize > 0) {
        pointer = this.deleted[--this.deletedSize];
      } else {
        pointer = this.size;
      }
      this.size++;
    } else {
      // Cache is full, we need to drop the last value
      pointer = this.tail;
      this.tail = this.backward[pointer];
      delete this.items[this.keys[pointer]];
    }

    // Storing key & value
    this.items[key] = pointer;
    this.keys[pointer] = key;
    this.values[pointer] = value;

    // Moving the item at the front of the list
    this.forward[pointer] = this.head;
    this.backward[this.head] = pointer;
    this.head = pointer;
  }

  /**
   * Method used to get the value attached to the given key. Will move the
   * related key to the front of the underlying linked list.
   */
  get(key: K) {
    const pointer = this.items[key];
    if (typeof pointer === "undefined") return;
    this.splayOnTop(pointer);
    return this.values[pointer];
  }

  /**
   * Method used to get the value attached to the given key. Does not modify
   * the ordering of the underlying linked list.
   */
  peek(key: K) {
    const pointer = this.items[key];
    if (typeof pointer === "undefined") return;
    return this.values[pointer];
  }

  /**
   * Method used to check whether the key exists in the cache.
   */
  has(key: K) {
    return key in this.items;
  }

  /**
   * Method used to delete the value for the given key in the cache.
   */
  delete(key: K) {
    const pointer = this.items[key];

    if (typeof pointer === "undefined") {
      return;
    }

    if (this.head === pointer && this.tail === pointer) {
      this.clear();
      return;
    }

    const previous = this.backward[pointer];
    const next = this.forward[pointer];

    if (this.head === pointer) {
      this.head = next;
    }
    if (this.tail === pointer) {
      this.tail = previous;
    }

    this.forward[previous] = next;
    this.backward[next] = previous;

    delete this.items[key];
    this.size--;
    this.deleted[this.deletedSize++] = pointer;
  }

  /**
   * Method used to clear the structure.
   */
  clear() {
    this.size = 0;
    this.deletedSize = 0;
    this.head = 0;
    this.tail = 0;
    this.items = {} as Record<K, number>;
  }
}
