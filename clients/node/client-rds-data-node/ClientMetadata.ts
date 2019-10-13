import { HttpEndpoint } from '@aws-sdk/protocol-http';
export function endpointProvider(tls: boolean, region: string): HttpEndpoint {
  return {
    protocol: tls ? "https:" : "http:",
    path: "/",
    hostname: `rds-data.${region}.amazonaws.com`
  }
}

export function signingRegionProvider(region: string): string {
  return region;
}