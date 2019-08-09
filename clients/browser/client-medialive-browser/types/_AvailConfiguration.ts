import { _AvailSettings, _UnmarshalledAvailSettings } from "./_AvailSettings";

/**
 * Avail Configuration
 */
export interface _AvailConfiguration {
  /**
   * Ad avail settings.
   */
  AvailSettings?: _AvailSettings;
}

export interface _UnmarshalledAvailConfiguration extends _AvailConfiguration {
  /**
   * Ad avail settings.
   */
  AvailSettings?: _UnmarshalledAvailSettings;
}
