import {
  _QueryCompileErrorLocation,
  _UnmarshalledQueryCompileErrorLocation
} from "./_QueryCompileErrorLocation";

/**
 * <p>Reserved.</p>
 */
export interface _QueryCompileError {
  /**
   * <p>Reserved.</p>
   */
  location?: _QueryCompileErrorLocation;

  /**
   * <p>Reserved.</p>
   */
  message?: string;
}

export interface _UnmarshalledQueryCompileError extends _QueryCompileError {
  /**
   * <p>Reserved.</p>
   */
  location?: _UnmarshalledQueryCompileErrorLocation;
}
