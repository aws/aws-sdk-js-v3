/**
 * <p>Describes a quota for an AWS account, for example, the number of replication instances allowed.</p>
 */
export interface _AccountQuota {
  /**
   * <p>The name of the AWS DMS quota for this AWS account.</p>
   */
  AccountQuotaName?: string;

  /**
   * <p>The amount currently used toward the quota maximum.</p>
   */
  Used?: number;

  /**
   * <p>The maximum allowed value for the quota.</p>
   */
  Max?: number;
}

export type _UnmarshalledAccountQuota = _AccountQuota;
