const ATTR_ESCAPE_RE = /[&<>"]/g;

const ATTR_ESCAPE_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
};

/**
 * @internal
 *
 * Escapes characters that can not be in an XML attribute.
 */
export function escapeAttribute(value: string): string {
  return value.replace(ATTR_ESCAPE_RE, (ch) => ATTR_ESCAPE_MAP[ch]);
}
