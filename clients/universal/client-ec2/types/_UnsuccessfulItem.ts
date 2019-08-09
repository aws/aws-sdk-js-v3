import {
  _UnsuccessfulItemError,
  _UnmarshalledUnsuccessfulItemError
} from "./_UnsuccessfulItemError";

/**
 * <p>Information about items that were not successfully processed in a batch call.</p>
 */
export interface _UnsuccessfulItem {
  /**
   * <p>Information about the error.</p>
   */
  Error?: _UnsuccessfulItemError;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;
}

export interface _UnmarshalledUnsuccessfulItem extends _UnsuccessfulItem {
  /**
   * <p>Information about the error.</p>
   */
  Error?: _UnmarshalledUnsuccessfulItemError;
}
