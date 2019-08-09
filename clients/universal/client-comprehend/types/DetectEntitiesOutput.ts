import { _UnmarshalledEntity } from "./_Entity";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DetectEntitiesOutput shape
 */
export interface DetectEntitiesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A collection of entities identified in the input text. For each entity, the response provides the entity text, entity type, where the entity text begins and ends, and the level of confidence that Amazon Comprehend has in the detection. For a list of entity types, see <a>how-entities</a>. </p>
   */
  Entities?: Array<_UnmarshalledEntity>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
