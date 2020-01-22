export function isValidHostname(hostname: string): boolean {
  const hostPattern = /^[a-zA-Z0-9]{1}$|^[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9]$/;
  return hostPattern.test(hostname);
}
