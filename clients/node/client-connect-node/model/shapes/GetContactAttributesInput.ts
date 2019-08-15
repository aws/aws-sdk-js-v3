import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetContactAttributesInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId", "InitialContactId"],
  members: {
    InstanceId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "InstanceId"
    },
    InitialContactId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "InitialContactId"
    }
  }
};
