import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The replication subnet group does not cover enough Availability Zones (AZs). Edit the replication subnet group and add more AZs.</p>
 */
export interface ReplicationSubnetGroupDoesNotCoverEnoughAZs
  extends __ServiceException__<
    _ReplicationSubnetGroupDoesNotCoverEnoughAZsDetails
  > {
  name: "ReplicationSubnetGroupDoesNotCoverEnoughAZs";
}

export interface _ReplicationSubnetGroupDoesNotCoverEnoughAZsDetails {
  /**
   * <p/>
   */
  message?: string;
}
