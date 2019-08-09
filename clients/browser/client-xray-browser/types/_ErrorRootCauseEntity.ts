import {
  _RootCauseException,
  _UnmarshalledRootCauseException
} from "./_RootCauseException";

/**
 * <p>A collection of segments and corresponding subsegments associated to a trace summary error.</p>
 */
export interface _ErrorRootCauseEntity {
  /**
   * <p>The name of the entity.</p>
   */
  Name?: string;

  /**
   * <p>The types and messages of the exceptions.</p>
   */
  Exceptions?: Array<_RootCauseException> | Iterable<_RootCauseException>;

  /**
   * <p>A flag that denotes a remote subsegment.</p>
   */
  Remote?: boolean;
}

export interface _UnmarshalledErrorRootCauseEntity
  extends _ErrorRootCauseEntity {
  /**
   * <p>The types and messages of the exceptions.</p>
   */
  Exceptions?: Array<_UnmarshalledRootCauseException>;
}
