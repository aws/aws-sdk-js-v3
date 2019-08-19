import { _UnmarshalledOpsEntity } from "./_OpsEntity";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetOpsSummaryOutput shape
 */
export interface GetOpsSummaryOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of aggregated and filtered OpsItems.</p>
   */
  Entities?: Array<_UnmarshalledOpsEntity>;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
