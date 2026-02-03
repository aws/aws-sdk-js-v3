/**
 * Helper for identifying unknown union members during deserialization.
 */
export class UnionSerde {
  private keys: Set<string>;

  public constructor(private from: any, private to: any) {
    this.keys = new Set(Object.keys(this.from).filter((k) => k !== "__type"));
  }

  /**
   * Marks the key as being a known member.
   * @param key - to mark.
   */
  public mark(key: string): void {
    this.keys.delete(key);
  }

  /**
   * @returns whether only one key remains unmarked and nothing has been written,
   * implying the object is a union.
   */
  public hasUnknown(): boolean {
    return this.keys.size === 1 && Object.keys(this.to).length === 0;
  }

  /**
   * Writes the unknown key-value pair, if present, into the $unknown property
   * of the union object.
   */
  public writeUnknown(): void {
    if (this.hasUnknown()) {
      const k = this.keys.values().next().value as string;
      const v = this.from[k];
      this.to.$unknown = [k, v];
    }
  }
}
