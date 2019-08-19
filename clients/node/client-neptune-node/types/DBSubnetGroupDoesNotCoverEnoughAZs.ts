import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
 */
export interface DBSubnetGroupDoesNotCoverEnoughAZs
  extends __ServiceException__<_DBSubnetGroupDoesNotCoverEnoughAZsDetails> {
  name: "DBSubnetGroupDoesNotCoverEnoughAZs";
}

export interface _DBSubnetGroupDoesNotCoverEnoughAZsDetails {}
