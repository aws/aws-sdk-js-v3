/**
 * <p>Summary for a resource.</p>
 */
export interface _ManagedResourceSummary {
  /**
   * <p>Type of resource associated with a license (instance, host, or AMI).</p>
   */
  ResourceType?: "EC2_INSTANCE" | "EC2_HOST" | "EC2_AMI" | string;

  /**
   * <p>Number of resources associated with licenses.</p>
   */
  AssociationCount?: number;
}

export type _UnmarshalledManagedResourceSummary = _ManagedResourceSummary;
