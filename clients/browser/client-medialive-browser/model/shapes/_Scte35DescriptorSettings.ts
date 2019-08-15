import { _Scte35SegmentationDescriptor } from "./_Scte35SegmentationDescriptor";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Scte35DescriptorSettings: _Structure_ = {
  type: "structure",
  required: ["SegmentationDescriptorScte35DescriptorSettings"],
  members: {
    SegmentationDescriptorScte35DescriptorSettings: {
      shape: _Scte35SegmentationDescriptor,
      locationName: "segmentationDescriptorScte35DescriptorSettings"
    }
  }
};
