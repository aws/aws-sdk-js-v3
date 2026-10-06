// smithy-typescript generated code
/**
 * <p>The quotas that apply to web functions in your account in the current AWS Region.</p>
 * @public
 */
export interface AccountQuotas {
  /**
   * <p>The maximum total number of Arm vCPUs that you can allocate across all of your web functions in the current AWS Region.</p>
   * @public
   */
  maxTotalArmVCpus: number | undefined;

  /**
   * <p>The maximum number of requests per second allowed across all of your web function endpoints in your account in the current AWS Region.</p>
   * @public
   */
  maxTotalRateLimit: number | undefined;

  /**
   * <p>The maximum number of revisions that a single web function can have.</p>
   * @public
   */
  maxRevisionsPerFunction: number | undefined;

  /**
   * <p>The maximum number of endpoints that a single web function can have.</p>
   * @public
   */
  maxEndpointsPerFunction: number | undefined;
}

/**
 * <p>Contains your current web function usage for the current AWS Region.</p>
 * @public
 */
export interface AccountUsage {
  /**
   * <p>The number of web functions in your account in the current AWS Region.</p>
   * @public
   */
  functionCount: number | undefined;
}

/**
 * @public
 */
export interface GetWebAccountSettingsRequest {}

/**
 * <p>Contains your AWS Lambda Web Functions account quotas and usage for the current AWS Region.</p>
 * @public
 */
export interface GetWebAccountSettingsResponse {
  /**
   * <p>The quotas that apply to web functions in your account in the current AWS Region.</p>
   * @public
   */
  accountQuotas: AccountQuotas | undefined;

  /**
   * <p>The current web function usage for your account in the current AWS Region.</p>
   * @public
   */
  accountUsage: AccountUsage | undefined;
}
