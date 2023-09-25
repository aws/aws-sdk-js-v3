import { CredentialsProviderError } from "@smithy/property-provider";

/**
 * @internal
 * Anything starting with 127.
 */
const LOOPBACK_CIDR_IPv4 = "127.0.0.0/8";
/**
 * @internal
 * A single IP equal to
 * 0000:0000:0000:0000:0000:0000:0000:0001
 */
const LOOPBACK_CIDR_IPv6 = "::1/128";
/**
 * @internal
 */
const ECS_CONTAINER_HOST = "169.254.170.2";
/**
 * @internal
 */
const EKS_CONTAINER_HOST_IPv4 = "169.254.170.23";
/**
 * @internal
 */
const EKS_CONTAINER_HOST_IPv6 = "[fd00:ec2::23]";

/**
 * @internal
 *
 * @param url - to be validated.
 * @throws if not acceptable to this provider.
 */
export const checkUrl = (url: URL): void => {
  if (url.protocol === "https:") {
    // no additional requirements for HTTPS.
    return;
  }

  if (
    url.hostname === ECS_CONTAINER_HOST ||
    url.hostname === EKS_CONTAINER_HOST_IPv4 ||
    url.hostname === EKS_CONTAINER_HOST_IPv6
  ) {
    return;
  }

  if (url.hostname.includes("[")) {
    // IPv6
    if (url.hostname === "[::1]" || url.hostname === "[0000:0000:0000:0000:0000:0000:0000:0001]") {
      return;
    }
  } else {
    // IPv4
    if (url.hostname === "localhost") {
      return;
    }
    const ipComponents = url.hostname.split(".");
    const inRange = (component: string): boolean => {
      const num = parseInt(component, 10);
      return 0 <= num && num <= 255;
    };
    if (
      ipComponents[0] === "127" &&
      inRange(ipComponents[1]) &&
      inRange(ipComponents[2]) &&
      inRange(ipComponents[3]) &&
      ipComponents.length === 4
    ) {
      return;
    }
  }

  throw new CredentialsProviderError(
    `URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`
  );
};
