import { _Entity, _UnmarshalledEntity } from "./_Entity";

/**
 * <p>The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.</p>
 */
export interface _BatchDetectEntitiesItemResult {
  /**
   * <p>The zero-based index of the document in the input list.</p>
   */
  Index?: number;

  /**
   * <p>One or more <a>Entity</a> objects, one for each entity detected in the document.</p>
   */
  Entities?: Array<_Entity> | Iterable<_Entity>;
}

export interface _UnmarshalledBatchDetectEntitiesItemResult
  extends _BatchDetectEntitiesItemResult {
  /**
   * <p>One or more <a>Entity</a> objects, one for each entity detected in the document.</p>
   */
  Entities?: Array<_UnmarshalledEntity>;
}
