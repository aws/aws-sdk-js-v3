/**
 * One-time detection: can JSON.parse accept a Buffer directly?
 * Node.js 22+ supports this, browsers and older runtimes do not.
 * @internal
 */
let canParseBuffer: boolean | undefined;

export function detectBufferParsing(): boolean {
  if (canParseBuffer === undefined) {
    try {
      if (typeof Buffer !== "function") {
        canParseBuffer = false;
      } else {
        const result = JSON.parse(Buffer.from([0x7b, 0x7d]) as any);
        canParseBuffer = result !== null && typeof result === "object";
      }
    } catch {
      canParseBuffer = false;
    }
  }
  return canParseBuffer;
}
