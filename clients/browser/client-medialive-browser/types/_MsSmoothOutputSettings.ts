/**
 * Ms Smooth Output Settings
 */
export interface _MsSmoothOutputSettings {
  /**
   * String concatenated to the end of the destination filename.  Required for multiple outputs of the same type.
   */
  NameModifier?: string;
}

export type _UnmarshalledMsSmoothOutputSettings = _MsSmoothOutputSettings;
