import { _UnmarshalledComplianceItem } from "./_ComplianceItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListComplianceItemsOutput shape
 */
export interface ListComplianceItemsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of compliance information for the specified resource ID. </p>
   */
  ComplianceItems?: Array<_UnmarshalledComplianceItem>;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
