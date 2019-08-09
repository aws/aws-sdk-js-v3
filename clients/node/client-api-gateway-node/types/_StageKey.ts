/**
 * <p>A reference to a unique stage identified in the format <code>{restApiId}/{stage}</code>.</p>
 */
export interface _StageKey {
  /**
   * <p>The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId?: string;

  /**
   * <p>The stage name associated with the stage key.</p>
   */
  stageName?: string;
}

export type _UnmarshalledStageKey = _StageKey;
