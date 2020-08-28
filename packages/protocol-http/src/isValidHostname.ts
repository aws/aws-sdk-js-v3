export function isValidHostname(hostname: string): boolean {
  const hostPattern = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
  return hostPattern.test(hostname);
}
