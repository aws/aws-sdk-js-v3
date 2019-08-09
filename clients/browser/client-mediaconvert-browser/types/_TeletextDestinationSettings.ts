/**
 * Settings for Teletext caption output
 */
export interface _TeletextDestinationSettings {
  /**
   * Set pageNumber to the Teletext page number for the destination captions for this output. This value must be a three-digit hexadecimal string; strings ending in -FF are invalid. If you are passing through the entire set of Teletext data, do not use this field.
   */
  PageNumber?: string;
}

export type _UnmarshalledTeletextDestinationSettings = _TeletextDestinationSettings;
