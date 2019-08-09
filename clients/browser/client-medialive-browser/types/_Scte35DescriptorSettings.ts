import {
  _Scte35SegmentationDescriptor,
  _UnmarshalledScte35SegmentationDescriptor
} from "./_Scte35SegmentationDescriptor";

/**
 * SCTE-35 Descriptor settings.
 */
export interface _Scte35DescriptorSettings {
  /**
   * SCTE-35 Segmentation Descriptor.
   */
  SegmentationDescriptorScte35DescriptorSettings: _Scte35SegmentationDescriptor;
}

export interface _UnmarshalledScte35DescriptorSettings
  extends _Scte35DescriptorSettings {
  /**
   * SCTE-35 Segmentation Descriptor.
   */
  SegmentationDescriptorScte35DescriptorSettings: _UnmarshalledScte35SegmentationDescriptor;
}
