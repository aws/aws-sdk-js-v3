import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDeviceDefinitionInput: _Structure_ = {
  type: "structure",
  required: ["DeviceDefinitionId"],
  members: {
    DeviceDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "DeviceDefinitionId"
    }
  }
};
