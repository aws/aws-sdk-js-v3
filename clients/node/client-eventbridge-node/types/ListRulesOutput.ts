import { _UnmarshalledRule } from "./_Rule";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListRulesOutput shape
 */
export interface ListRulesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The rules that match the specified criteria.</p>
   */
  Rules?: Array<_UnmarshalledRule>;

  /**
   * <p>Indicates whether there are additional results to retrieve. If there are no more results, the value is null.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
