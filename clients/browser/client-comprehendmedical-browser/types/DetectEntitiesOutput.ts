import { _UnmarshalledEntity } from "./_Entity";
import { _UnmarshalledUnmappedAttribute } from "./_UnmappedAttribute";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DetectEntitiesOutput shape
 */
export interface DetectEntitiesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.</p>
   */
  Entities: Array<_UnmarshalledEntity>;

  /**
   * <p> Attributes extracted from the input text that we were unable to relate to an entity.</p>
   */
  UnmappedAttributes?: Array<_UnmarshalledUnmappedAttribute>;

  /**
   * <p> If the result of the previous request to DetectEntities was truncated, include the Paginationtoken to fetch the next page of entities.</p>
   */
  PaginationToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
