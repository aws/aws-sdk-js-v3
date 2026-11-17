/**
 * Removes control characters from text that came from the credential daemon.
 * @internal
 */
export const sanitize = (text: string): string => {
  let sanitized = "";
  for (const char of text) {
    const code = char.charCodeAt(0);
    // C0 controls, DEL and C1 controls.
    if (code > 0x1f && (code < 0x7f || code > 0x9f)) {
      sanitized += char;
    }
  }
  return sanitized;
};
