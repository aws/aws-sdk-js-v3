import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDeviceDefinitionInput: _Structure_ = {
  type: "structure",
  required: ["DeviceDefinitionId"],
  members: {
    DeviceDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "DeviceDefinitionId"
    },
    Name: {
      shape: {
        type: "string"
      }
    }
  }
};
