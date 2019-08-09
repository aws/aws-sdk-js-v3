import { _UnmarshalledThingTypeDefinition } from "./_ThingTypeDefinition";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for the ListThingTypes operation.</p>
 */
export interface ListThingTypesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The thing types.</p>
   */
  thingTypes?: Array<_UnmarshalledThingTypeDefinition>;

  /**
   * <p>The token for the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
