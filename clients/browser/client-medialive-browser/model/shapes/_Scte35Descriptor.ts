import { _Scte35DescriptorSettings } from "./_Scte35DescriptorSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Scte35Descriptor: _Structure_ = {
  type: "structure",
  required: ["Scte35DescriptorSettings"],
  members: {
    Scte35DescriptorSettings: {
      shape: _Scte35DescriptorSettings,
      locationName: "scte35DescriptorSettings"
    }
  }
};
