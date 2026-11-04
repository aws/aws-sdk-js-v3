// smithy-typescript generated code
/**
 * @public
 */
export interface GetBuyerDashboardInput {
  /**
   * The ARN of the requested dashboard.
   *
   * @public
   */
  dashboardIdentifier: string | undefined;

  /**
   * Fully qualified domains that you add to the allow list for access to the generated URL that is then embedded. You can list up to two domains or subdomains in each API call. To include all subdomains under a specific domain, use `*`. For example, `https://*.amazon.com` includes all subdomains under `https://aws.amazon.com`.
   *
   * @public
   */
  embeddingDomains: string[] | undefined;
}

/**
 * @public
 */
export interface GetBuyerDashboardOutput {
  /**
   * The dashboard's embedding URL.
   *
   * @public
   */
  embedUrl: string | undefined;

  /**
   * The ARN of the returned dashboard.
   *
   * @public
   */
  dashboardIdentifier: string | undefined;

  /**
   * The fully qualified domains specified in the request. The domains enable access to the generated URL that is then embedded. You can list up to two domains or subdomains in each API call. To include all subdomains under a specific domain, use `*`. For example, `https://*.amazon.com` includes all subdomains under `https://aws.amazon.com`.
   *
   * @public
   */
  embeddingDomains: string[] | undefined;
}
