import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NewDeviceMetadataType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeviceKey: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DeviceGroupKey: {
      shape: {
        type: "string"
      }
    }
  }
};
