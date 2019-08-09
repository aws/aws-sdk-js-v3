import {
  _OutputGroupSettings,
  _UnmarshalledOutputGroupSettings
} from "./_OutputGroupSettings";
import { _Output, _UnmarshalledOutput } from "./_Output";

/**
 * Output groups for this Live Event. Output groups contain information about where streams should be distributed.
 */
export interface _OutputGroup {
  /**
   * Custom output group name optionally defined by the user.  Only letters, numbers, and the underscore character allowed; only 32 characters allowed.
   */
  Name?: string;

  /**
   * Settings associated with the output group.
   */
  OutputGroupSettings: _OutputGroupSettings;

  /**
   * Placeholder documentation for __listOfOutput
   */
  Outputs: Array<_Output> | Iterable<_Output>;
}

export interface _UnmarshalledOutputGroup extends _OutputGroup {
  /**
   * Settings associated with the output group.
   */
  OutputGroupSettings: _UnmarshalledOutputGroupSettings;

  /**
   * Placeholder documentation for __listOfOutput
   */
  Outputs: Array<_UnmarshalledOutput>;
}
