import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output from the ListThingPrincipals operation.</p>
 */
export interface ListThingPrincipalsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The principals associated with the thing.</p>
   */
  principals?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
