// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const DeliveryOptionType = {
  /**
   * <p>The Data as a Service delivery option.</p>
   */
  DATA_AS_A_SERVICE: "data-as-a-service",
} as const;
/**
 * @public
 */
export type DeliveryOptionType = (typeof DeliveryOptionType)[keyof typeof DeliveryOptionType];

/**
 * @public
 * @enum
 */
export const DeploymentConfigurationJobErrorCode = {
  /**
   * <p>The fulfillment URL isn't a valid absolute HTTPS URL, or it points to a network location that AWS Marketplace doesn't allow, such as a private or loopback address. Correct the fulfillment URL, and then start a new job. A new job with the same URL fails again.</p>
   */
  ENDPOINT_INVALID: "ENDPOINT_INVALID",
  /**
   * <p>AWS Marketplace couldn't reach the fulfillment URL when it validated the deployment configuration. The URL returned no HTTP response, for example because of a Domain Name System (DNS) failure, a refused connection, an untrusted or mismatched Transport Layer Security (TLS) certificate, or a timeout. Verify that the fulfillment URL is publicly reachable over HTTPS and responding, and then start a new job.</p>
   */
  FULFILLMENT_URL_UNREACHABLE: "FULFILLMENT_URL_UNREACHABLE",
  /**
   * <p>An internal error occurred. Start a new job.</p>
   */
  INTERNAL_ERROR: "INTERNAL_ERROR",
} as const;
/**
 * @public
 */
export type DeploymentConfigurationJobErrorCode =
  (typeof DeploymentConfigurationJobErrorCode)[keyof typeof DeploymentConfigurationJobErrorCode];

/**
 * @public
 * @enum
 */
export const DeploymentConfigurationJobStatus = {
  /**
   * <p>The job failed. The active deployment configuration didn't change. For details, see <code>errorCode</code> and <code>message</code>.</p>
   */
  FAILED: "FAILED",
  /**
   * <p>The job is running.</p>
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   * <p>The job finished, and its configuration is now the active deployment configuration.</p>
   */
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type DeploymentConfigurationJobStatus =
  (typeof DeploymentConfigurationJobStatus)[keyof typeof DeploymentConfigurationJobStatus];
