// smithy-typescript generated code
/**
 * @public
 */
export interface GetBuyerDashboardInput {
  /**
   * <p>The ARN of the requested dashboard.</p>
   * @public
   */
  dashboardIdentifier: string | undefined;

  /**
   * <p>Fully qualified domains that you add to the allow list for access to the generated URL that is then embedded. You can list up to two domains or subdomains in each API call.
   *       To include all subdomains under a specific domain, use <code>*</code>. For example, <code>https://*.amazon.com</code> includes all subdomains under
   *       <code>https://aws.amazon.com</code>.</p>
   * @public
   */
  embeddingDomains: string[] | undefined;
}

/**
 * @public
 */
export interface GetBuyerDashboardOutput {
  /**
   * <p>The dashboard's embedding URL.</p>
   * @public
   */
  embedUrl: string | undefined;

  /**
   * <p>The ARN of the returned dashboard.</p>
   * @public
   */
  dashboardIdentifier: string | undefined;

  /**
   * <p>The fully qualified domains specified in the request. The domains enable access to the generated URL that is then embedded. You can list up to two domains or subdomains in each API call.
   *       To include all subdomains under a specific domain, use <code>*</code>. For example, <code>https://*.amazon.com</code> includes all subdomains under
   *       <code>https://aws.amazon.com</code>.</p>
   * @public
   */
  embeddingDomains: string[] | undefined;
}
