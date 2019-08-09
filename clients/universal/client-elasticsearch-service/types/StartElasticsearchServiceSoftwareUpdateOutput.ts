import { _UnmarshalledServiceSoftwareOptions } from "./_ServiceSoftwareOptions";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code>StartElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update.</p>
 */
export interface StartElasticsearchServiceSoftwareUpdateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The current status of the Elasticsearch service software update.</p>
   */
  ServiceSoftwareOptions?: _UnmarshalledServiceSoftwareOptions;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
