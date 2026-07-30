import { toUtf8 } from "@smithy/core/serde";

/**
 * A Uint8Array subclass holding serialized JSON bytes that provides
 * string method compatibility for customer middleware.
 *
 * Middleware historically observed `request.body` as a string for JSON
 * protocol services. This class preserves that contract: string methods
 * and coercion (template literals, `+` operator) lazily decode the bytes
 * to a cached string. The HTTP transport layer still sees a Uint8Array
 * and sends raw bytes without conversion.
 *
 * @internal
 * @deprecated this adapter will be removed in a future version.
 */
export class JsonBytesStringAdapter extends Uint8Array {
  private string: string | null = null;

  public static allocUnsafe(bytes: number) {
    if (typeof Buffer === "function") {
      const buffer = Buffer.allocUnsafe(bytes);
      return new JsonBytesStringAdapter(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }
    return new JsonBytesStringAdapter(bytes);
  }

  /**
   * Enables string coercion via template literals and `+` operator.
   */
  public override toString(): string {
    return this.s();
  }

  /**
   * Enables string coercion in comparison and arithmetic contexts.
   * @returns a string. The signature is set to avoid incompatibility with extending Uint8Array.
   */
  public override valueOf(): any {
    return this.s();
  }

  // -- String.prototype methods for middleware compatibility --

  public override includes(searchString: string | number, position?: number): boolean {
    if (typeof searchString === "string") {
      return this.s().includes(searchString, position);
    }
    return Uint8Array.prototype.includes.call(this, searchString, position);
  }

  public override indexOf(searchString: string | number, position?: number): number {
    if (typeof searchString === "string") {
      return this.s().indexOf(searchString, position);
    }
    return Uint8Array.prototype.indexOf.call(this, searchString, position);
  }

  public override lastIndexOf(searchString: string | number, position?: number): number {
    if (typeof searchString === "string") {
      return this.s().lastIndexOf(searchString, position);
    }
    const fn = Uint8Array.prototype.lastIndexOf;
    if (position !== undefined) {
      return fn.call(this, searchString, position);
    }
    return fn.call(this, searchString);
  }

  public startsWith(searchString: string, position?: number): boolean {
    return this.s().startsWith(searchString, position);
  }

  public endsWith(searchString: string, endPosition?: number): boolean {
    return this.s().endsWith(searchString, endPosition);
  }

  public match(regexp: string | RegExp): RegExpMatchArray | null {
    return this.s().match(regexp);
  }

  public replace(searchValue: string | RegExp, replaceValue: string): string {
    return this.s().replace(searchValue, replaceValue);
  }

  public search(regexp: string | RegExp): number {
    return this.s().search(regexp);
  }

  public split(separator: string | RegExp, limit?: number): string[] {
    return this.s().split(separator, limit);
  }

  public substring(start: number, end?: number): string {
    return this.s().substring(start, end);
  }

  public trim(): string {
    return this.s().trim();
  }

  public trimStart(): string {
    return this.s().trimStart();
  }

  public trimEnd(): string {
    return this.s().trimEnd();
  }

  public charAt(pos: number): string {
    return this.s().charAt(pos);
  }

  public charCodeAt(index: number): number {
    return this.s().charCodeAt(index);
  }

  public padStart(maxLength: number, fillString?: string): string {
    return this.s().padStart(maxLength, fillString);
  }

  public padEnd(maxLength: number, fillString?: string): string {
    return this.s().padEnd(maxLength, fillString);
  }

  public repeat(count: number): string {
    return this.s().repeat(count);
  }

  public toUpperCase(): string {
    return this.s().toUpperCase();
  }

  public toLowerCase(): string {
    return this.s().toLowerCase();
  }

  /**
   * Decodes the bytes to a UTF-8 string on first access, then caches.
   * Subsequent calls return the cached string with zero cost.
   */
  private s(): string {
    if (this.string == null) {
      const n = Date.now();
      if (n > warned + 60_000) {
        console.warn(
          "@aws-sdk/core/protocols - WARN - JsonCodec2: you have called a string method on a Uint8Array request body. " +
            "It has been automatically converted to string. In a future version this will throw an error."
        );
        warned = n;
      }

      this.string = toUtf8(this);
    }
    return this.string;
  }
}

var warned = 0;
