import {
  _EntityRecognizerEvaluationMetrics,
  _UnmarshalledEntityRecognizerEvaluationMetrics
} from "./_EntityRecognizerEvaluationMetrics";
import {
  _EntityRecognizerMetadataEntityTypesListItem,
  _UnmarshalledEntityRecognizerMetadataEntityTypesListItem
} from "./_EntityRecognizerMetadataEntityTypesListItem";

/**
 * <p>Detailed information about an entity recognizer.</p>
 */
export interface _EntityRecognizerMetadata {
  /**
   * <p> The number of documents in the input data that were used to train the entity recognizer. Typically this is 80 to 90 percent of the input documents.</p>
   */
  NumberOfTrainedDocuments?: number;

  /**
   * <p> The number of documents in the input data that were used to test the entity recognizer. Typically this is 10 to 20 percent of the input documents.</p>
   */
  NumberOfTestDocuments?: number;

  /**
   * <p>Detailed information about the accuracy of an entity recognizer.</p>
   */
  EvaluationMetrics?: _EntityRecognizerEvaluationMetrics;

  /**
   * <p>Entity types from the metadata of an entity recognizer.</p>
   */
  EntityTypes?:
    | Array<_EntityRecognizerMetadataEntityTypesListItem>
    | Iterable<_EntityRecognizerMetadataEntityTypesListItem>;
}

export interface _UnmarshalledEntityRecognizerMetadata
  extends _EntityRecognizerMetadata {
  /**
   * <p>Detailed information about the accuracy of an entity recognizer.</p>
   */
  EvaluationMetrics?: _UnmarshalledEntityRecognizerEvaluationMetrics;

  /**
   * <p>Entity types from the metadata of an entity recognizer.</p>
   */
  EntityTypes?: Array<_UnmarshalledEntityRecognizerMetadataEntityTypesListItem>;
}
