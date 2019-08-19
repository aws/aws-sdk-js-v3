import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListThingsInThingGroupOutput shape
 */
export interface ListThingsInThingGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The things in the specified thing group.</p>
   */
  things?: Array<string>;

  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
