import { _UnmarshalledThingIndexingConfiguration } from "./_ThingIndexingConfiguration";
import { _UnmarshalledThingGroupIndexingConfiguration } from "./_ThingGroupIndexingConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetIndexingConfigurationOutput shape
 */
export interface GetIndexingConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Thing indexing configuration.</p>
   */
  thingIndexingConfiguration?: _UnmarshalledThingIndexingConfiguration;

  /**
   * <p>The index configuration.</p>
   */
  thingGroupIndexingConfiguration?: _UnmarshalledThingGroupIndexingConfiguration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
