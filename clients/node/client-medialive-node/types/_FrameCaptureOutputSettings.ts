/**
 * Frame Capture Output Settings
 */
export interface _FrameCaptureOutputSettings {
  /**
   * Required if the output group contains more than one output. This modifier forms part of the output file name.
   */
  NameModifier?: string;
}

export type _UnmarshalledFrameCaptureOutputSettings = _FrameCaptureOutputSettings;
