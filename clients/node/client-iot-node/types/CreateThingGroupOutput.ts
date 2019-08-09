import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateThingGroupOutput shape
 */
export interface CreateThingGroupOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The thing group name.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The thing group ARN.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The thing group ID.</p>
   */
  thingGroupId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
