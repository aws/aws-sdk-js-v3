import { _UnmarshalledUpgradeHistory } from "./_UpgradeHistory";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Container for response returned by <code> <a>GetUpgradeHistory</a> </code> operation. </p>
 */
export interface GetUpgradeHistoryOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> A list of <code> <a>UpgradeHistory</a> </code> objects corresponding to each Upgrade or Upgrade Eligibility Check performed on a domain returned as part of <code> <a>GetUpgradeHistoryResponse</a> </code> object. </p>
   */
  UpgradeHistories?: Array<_UnmarshalledUpgradeHistory>;

  /**
   * <p>Pagination token that needs to be supplied to the next call to get the next page of results</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
