import {
  _EntityTypesEvaluationMetrics,
  _UnmarshalledEntityTypesEvaluationMetrics
} from "./_EntityTypesEvaluationMetrics";

/**
 * <p>Individual item from the list of entity types in the metadata of an entity recognizer.</p>
 */
export interface _EntityRecognizerMetadataEntityTypesListItem {
  /**
   * <p>Type of entity from the list of entity types in the metadata of an entity recognizer. </p>
   */
  Type?: string;

  /**
   * <p>Detailed information about the accuracy of the entity recognizer for a specific item on the list of entity types. </p>
   */
  EvaluationMetrics?: _EntityTypesEvaluationMetrics;

  /**
   * <p>indicates the number of times the given entity name was seen in the training data. </p>
   */
  NumberOfTrainMentions?: number;
}

export interface _UnmarshalledEntityRecognizerMetadataEntityTypesListItem
  extends _EntityRecognizerMetadataEntityTypesListItem {
  /**
   * <p>Detailed information about the accuracy of the entity recognizer for a specific item on the list of entity types. </p>
   */
  EvaluationMetrics?: _UnmarshalledEntityTypesEvaluationMetrics;
}
