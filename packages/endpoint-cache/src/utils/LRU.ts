class LinkedListNode<V, K=string> {
  public prev: LinkedListNode<V, K> | undefined;
  public next: LinkedListNode<V, K> | undefined;
  
  constructor(public readonly key: K, public readonly value: V) {}
}

export class LRUCache<T> {
    private headerNode: LinkedListNode<T> | undefined;
    private tailNode: LinkedListNode<T> | undefined;
    private nodeMap: {[key: string]: LinkedListNode<T>} = {};
    private size = 0;
    private readonly sizeLimit: number;

    constructor(size: number) {
      if (typeof size !== 'number' || size < 1) {
        throw new Error('Cache size can only be positive number');
      }
      this.sizeLimit = size;
    }

    get length(): number {
      return this.size;
    }
  
    private prependToList(node: LinkedListNode<T>): void {
      if (!this.headerNode) {
        this.tailNode = node;
      } else {
        this.headerNode.prev = node;
        node.next = this.headerNode;
      }
      this.headerNode = node;
      this.size++;
    }
  
    private removeFromTail(): LinkedListNode<T> | undefined {
      if (!this.tailNode) {
        return undefined;
      }
      const node = this.tailNode;
      const prevNode = node.prev;
      if (prevNode) {
        prevNode.next = undefined;
      }
      node.prev = undefined;
      this.tailNode = prevNode;
      this.size--;
      return node;
    }

    private detachFromList(node: LinkedListNode<T>): void {
      if (node.prev) {
        node.prev.next = node.next;
      }
      if (node.next) {
        node.next.prev = node.prev;
      }
      node.next = undefined;
      node.prev = undefined;
      this.size--;
    }

    public get(key: string): T | undefined {
      if (this.nodeMap[key]) {
        const node = this.nodeMap[key];
        this.detachFromList(node);
        this.prependToList(node);
        return node.value
      }
    }

    public remove(key: string): void {
      if (this.nodeMap[key]) {
        const node = this.nodeMap[key];
        this.detachFromList(node);
        delete this.nodeMap[key];
      }
    }

    public put(key: string, value: T): void {
      if (this.size === this.sizeLimit) {
        const tailNode = this.removeFromTail()!;
        const key = tailNode.key;
        delete this.nodeMap[key];
      }
      const newNode = new LinkedListNode<T>(key, value);
      this.nodeMap[key] = newNode;
      this.prependToList(newNode);
    }
}