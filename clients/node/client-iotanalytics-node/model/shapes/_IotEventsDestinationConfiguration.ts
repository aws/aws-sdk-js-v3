import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IotEventsDestinationConfiguration: _Structure_ = {
  type: "structure",
  required: ["inputName", "roleArn"],
  members: {
    inputName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    roleArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
