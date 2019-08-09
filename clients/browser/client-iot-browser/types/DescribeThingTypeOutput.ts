import { _UnmarshalledThingTypeProperties } from "./_ThingTypeProperties";
import { _UnmarshalledThingTypeMetadata } from "./_ThingTypeMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for the DescribeThingType operation.</p>
 */
export interface DescribeThingTypeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The thing type ID.</p>
   */
  thingTypeId?: string;

  /**
   * <p>The thing type ARN.</p>
   */
  thingTypeArn?: string;

  /**
   * <p>The ThingTypeProperties contains information about the thing type including description, and a list of searchable thing attribute names.</p>
   */
  thingTypeProperties?: _UnmarshalledThingTypeProperties;

  /**
   * <p>The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when it was deprecated.</p>
   */
  thingTypeMetadata?: _UnmarshalledThingTypeMetadata;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
