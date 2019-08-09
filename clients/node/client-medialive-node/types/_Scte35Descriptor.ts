import {
  _Scte35DescriptorSettings,
  _UnmarshalledScte35DescriptorSettings
} from "./_Scte35DescriptorSettings";

/**
 * Holds one set of SCTE-35 Descriptor Settings.
 */
export interface _Scte35Descriptor {
  /**
   * SCTE-35 Descriptor Settings.
   */
  Scte35DescriptorSettings: _Scte35DescriptorSettings;
}

export interface _UnmarshalledScte35Descriptor extends _Scte35Descriptor {
  /**
   * SCTE-35 Descriptor Settings.
   */
  Scte35DescriptorSettings: _UnmarshalledScte35DescriptorSettings;
}
