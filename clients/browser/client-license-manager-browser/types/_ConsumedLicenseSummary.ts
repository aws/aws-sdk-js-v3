/**
 * <p>Details about license consumption.</p>
 */
export interface _ConsumedLicenseSummary {
  /**
   * <p>Resource type of the resource consuming a license (instance, host, or AMI).</p>
   */
  ResourceType?: "EC2_INSTANCE" | "EC2_HOST" | "EC2_AMI" | string;

  /**
   * <p>Number of licenses consumed by a resource.</p>
   */
  ConsumedLicenses?: number;
}

export type _UnmarshalledConsumedLicenseSummary = _ConsumedLicenseSummary;
