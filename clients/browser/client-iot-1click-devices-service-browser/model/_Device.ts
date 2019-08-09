import { _Attributes } from "./_Attributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Device: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Attributes: {
      shape: _Attributes,
      locationName: "attributes"
    },
    DeviceId: {
      shape: {
        type: "string"
      },
      locationName: "deviceId"
    },
    Type: {
      shape: {
        type: "string"
      },
      locationName: "type"
    }
  }
};
