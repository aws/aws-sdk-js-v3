/**
 * Teletext Source Settings
 */
export interface _TeletextSourceSettings {
  /**
   * Specifies the teletext page number within the data stream from which to extract captions. Range of 0x100 (256) to 0x8FF (2303). Unused for passthrough. Should be specified as a hexadecimal string with no "0x" prefix.
   */
  PageNumber?: string;
}

export type _UnmarshalledTeletextSourceSettings = _TeletextSourceSettings;
