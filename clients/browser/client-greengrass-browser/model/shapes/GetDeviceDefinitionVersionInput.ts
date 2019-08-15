import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDeviceDefinitionVersionInput: _Structure_ = {
  type: "structure",
  required: ["DeviceDefinitionVersionId", "DeviceDefinitionId"],
  members: {
    DeviceDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "DeviceDefinitionId"
    },
    DeviceDefinitionVersionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "DeviceDefinitionVersionId"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "NextToken"
    }
  }
};
