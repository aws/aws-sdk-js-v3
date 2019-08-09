import {
  _OutputGroupSettings,
  _UnmarshalledOutputGroupSettings
} from "./_OutputGroupSettings";
import { _Output, _UnmarshalledOutput } from "./_Output";

/**
 * Group of outputs
 */
export interface _OutputGroup {
  /**
   * Use Custom Group Name (CustomName) to specify a name for the output group. This value is displayed on the console and can make your job settings JSON more human-readable. It does not affect your outputs. Use up to twelve characters that are either letters, numbers, spaces, or underscores.
   */
  CustomName?: string;

  /**
   * Name of the output group
   */
  Name?: string;

  /**
   * Output Group settings, including type
   */
  OutputGroupSettings?: _OutputGroupSettings;

  /**
   * This object holds groups of encoding settings, one group of settings per output.
   */
  Outputs?: Array<_Output> | Iterable<_Output>;
}

export interface _UnmarshalledOutputGroup extends _OutputGroup {
  /**
   * Output Group settings, including type
   */
  OutputGroupSettings?: _UnmarshalledOutputGroupSettings;

  /**
   * This object holds groups of encoding settings, one group of settings per output.
   */
  Outputs?: Array<_UnmarshalledOutput>;
}
