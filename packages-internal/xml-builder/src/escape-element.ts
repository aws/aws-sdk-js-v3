const ELEMENT_ESCAPE_RE = /[&"'<>\r\n\u0085\u2028]/g;

const ELEMENT_ESCAPE_MAP: Record<string, string> = {
  "&": "&amp;",
  '"': "&quot;",
  "'": "&apos;",
  "<": "&lt;",
  ">": "&gt;",
  "\r": "&#x0D;",
  "\n": "&#x0A;",
  "\u0085": "&#x85;",
  "\u2028": "&#x2028;",
};

/**
 * @internal
 *
 * Escapes characters that can not be in an XML element.
 */
export function escapeElement(value: string): string {
  return value.replace(ELEMENT_ESCAPE_RE, (ch) => ELEMENT_ESCAPE_MAP[ch]);
}
