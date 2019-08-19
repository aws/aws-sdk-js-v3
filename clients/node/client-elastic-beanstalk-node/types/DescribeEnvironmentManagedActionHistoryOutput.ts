import { _UnmarshalledManagedActionHistoryItem } from "./_ManagedActionHistoryItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A result message containing a list of completed and failed managed actions.</p>
 */
export interface DescribeEnvironmentManagedActionHistoryOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of completed and failed managed actions.</p>
   */
  ManagedActionHistoryItems?: Array<_UnmarshalledManagedActionHistoryItem>;

  /**
   * <p>A pagination token that you pass to <a>DescribeEnvironmentManagedActionHistory</a> to get the next page of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
