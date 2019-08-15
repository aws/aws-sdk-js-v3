import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFederationTokenInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId"],
  members: {
    InstanceId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "InstanceId"
    }
  }
};
