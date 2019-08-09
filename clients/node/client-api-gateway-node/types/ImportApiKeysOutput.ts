import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The identifier of an <a>ApiKey</a> used in a <a>UsagePlan</a>.</p>
 */
export interface ImportApiKeysOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of all the <a>ApiKey</a> identifiers.</p>
   */
  ids?: Array<string>;

  /**
   * <p>A list of warning messages.</p>
   */
  warnings?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
