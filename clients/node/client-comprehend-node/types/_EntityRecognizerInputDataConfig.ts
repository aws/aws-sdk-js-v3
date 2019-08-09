import {
  _EntityTypesListItem,
  _UnmarshalledEntityTypesListItem
} from "./_EntityTypesListItem";
import {
  _EntityRecognizerDocuments,
  _UnmarshalledEntityRecognizerDocuments
} from "./_EntityRecognizerDocuments";
import {
  _EntityRecognizerAnnotations,
  _UnmarshalledEntityRecognizerAnnotations
} from "./_EntityRecognizerAnnotations";
import {
  _EntityRecognizerEntityList,
  _UnmarshalledEntityRecognizerEntityList
} from "./_EntityRecognizerEntityList";

/**
 * <p>Specifies the format and location of the input data.</p>
 */
export interface _EntityRecognizerInputDataConfig {
  /**
   * <p>The entity types in the input data for an entity recognizer. A maximum of 12 entity types can be used at one time to train an entity recognizer.</p>
   */
  EntityTypes: Array<_EntityTypesListItem> | Iterable<_EntityTypesListItem>;

  /**
   * <p>S3 location of the documents folder for an entity recognizer</p>
   */
  Documents: _EntityRecognizerDocuments;

  /**
   * <p>S3 location of the annotations file for an entity recognizer.</p>
   */
  Annotations?: _EntityRecognizerAnnotations;

  /**
   * <p>S3 location of the entity list for an entity recognizer.</p>
   */
  EntityList?: _EntityRecognizerEntityList;
}

export interface _UnmarshalledEntityRecognizerInputDataConfig
  extends _EntityRecognizerInputDataConfig {
  /**
   * <p>The entity types in the input data for an entity recognizer. A maximum of 12 entity types can be used at one time to train an entity recognizer.</p>
   */
  EntityTypes: Array<_UnmarshalledEntityTypesListItem>;

  /**
   * <p>S3 location of the documents folder for an entity recognizer</p>
   */
  Documents: _UnmarshalledEntityRecognizerDocuments;

  /**
   * <p>S3 location of the annotations file for an entity recognizer.</p>
   */
  Annotations?: _UnmarshalledEntityRecognizerAnnotations;

  /**
   * <p>S3 location of the entity list for an entity recognizer.</p>
   */
  EntityList?: _UnmarshalledEntityRecognizerEntityList;
}
