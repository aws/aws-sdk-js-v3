import { _UnmarshalledTableVersion } from "./_TableVersion";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetTableVersionsOutput shape
 */
export interface GetTableVersionsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of strings identifying available versions of the specified table.</p>
   */
  TableVersions?: Array<_UnmarshalledTableVersion>;

  /**
   * <p>A continuation token, if the list of available versions does not include the last one.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
