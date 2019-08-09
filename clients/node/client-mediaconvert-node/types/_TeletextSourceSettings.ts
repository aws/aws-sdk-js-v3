/**
 * Settings specific to Teletext caption sources, including Page number.
 */
export interface _TeletextSourceSettings {
  /**
   * Use Page Number (PageNumber) to specify the three-digit hexadecimal page number that will be used for Teletext captions. Do not use this setting if you are passing through teletext from the input source to output.
   */
  PageNumber?: string;
}

export type _UnmarshalledTeletextSourceSettings = _TeletextSourceSettings;
