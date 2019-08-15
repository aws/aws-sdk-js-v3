import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateVTLDeviceTypeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VTLDeviceARN: {
      shape: {
        type: "string",
        min: 50
      }
    }
  }
};
