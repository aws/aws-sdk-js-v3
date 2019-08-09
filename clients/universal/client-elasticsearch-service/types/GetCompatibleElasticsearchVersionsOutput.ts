import { _UnmarshalledCompatibleVersionsMap } from "./_CompatibleVersionsMap";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Container for response returned by <code> <a>GetCompatibleElasticsearchVersions</a> </code> operation. </p>
 */
export interface GetCompatibleElasticsearchVersionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> A map of compatible Elasticsearch versions returned as part of the <code> <a>GetCompatibleElasticsearchVersions</a> </code> operation. </p>
   */
  CompatibleElasticsearchVersions?: Array<_UnmarshalledCompatibleVersionsMap>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
