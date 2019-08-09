/**
 * <p>A collection of segments and corresponding subsegments associated to a response time warning.</p>
 */
export interface _ResponseTimeRootCauseEntity {
  /**
   * <p>The name of the entity.</p>
   */
  Name?: string;

  /**
   * <p>The types and messages of the exceptions.</p>
   */
  Coverage?: number;

  /**
   * <p>A flag that denotes a remote subsegment.</p>
   */
  Remote?: boolean;
}

export type _UnmarshalledResponseTimeRootCauseEntity = _ResponseTimeRootCauseEntity;
