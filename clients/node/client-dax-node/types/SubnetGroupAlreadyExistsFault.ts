import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified subnet group already exists.</p>
 */
export interface SubnetGroupAlreadyExistsFault
  extends __ServiceException__<_SubnetGroupAlreadyExistsFaultDetails> {
  name: "SubnetGroupAlreadyExistsFault";
}

export interface _SubnetGroupAlreadyExistsFaultDetails {}
