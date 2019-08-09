import {
  _OutputLocationRef,
  _UnmarshalledOutputLocationRef
} from "./_OutputLocationRef";

/**
 * Archive Group Settings
 */
export interface _ArchiveGroupSettings {
  /**
   * A directory and base filename where archive files should be written.
   */
  Destination: _OutputLocationRef;

  /**
   * Number of seconds to write to archive file before closing and starting a new one.
   */
  RolloverInterval?: number;
}

export interface _UnmarshalledArchiveGroupSettings
  extends _ArchiveGroupSettings {
  /**
   * A directory and base filename where archive files should be written.
   */
  Destination: _UnmarshalledOutputLocationRef;
}
