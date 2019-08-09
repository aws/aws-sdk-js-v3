import { _UnmarshalledThingGroupProperties } from "./_ThingGroupProperties";
import { _UnmarshalledThingGroupMetadata } from "./_ThingGroupMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeThingGroupOutput shape
 */
export interface DescribeThingGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the thing group.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The thing group ID.</p>
   */
  thingGroupId?: string;

  /**
   * <p>The thing group ARN.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The version of the thing group.</p>
   */
  version?: number;

  /**
   * <p>The thing group properties.</p>
   */
  thingGroupProperties?: _UnmarshalledThingGroupProperties;

  /**
   * <p>Thing group metadata.</p>
   */
  thingGroupMetadata?: _UnmarshalledThingGroupMetadata;

  /**
   * <p>The dynamic thing group index name.</p>
   */
  indexName?: string;

  /**
   * <p>The dynamic thing group search query string.</p>
   */
  queryString?: string;

  /**
   * <p>The dynamic thing group query version.</p>
   */
  queryVersion?: string;

  /**
   * <p>The dynamic thing group status.</p>
   */
  status?: "ACTIVE" | "BUILDING" | "REBUILDING" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
