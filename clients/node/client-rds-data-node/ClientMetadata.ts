import { HttpEndpoint } from '@aws-sdk/protocol-http';
export function endpointProvider(region: string, options: { tls?: boolean } = { tls: true }): HttpEndpoint {
  return {
    protocol: options.tls ? "https:" : "http:",
    path: "/",
    hostname: `rds-data.${region}.amazonaws.com`
  }
}

export function signingRegionProvider(region: string): string {
  return region;
}