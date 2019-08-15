import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeThingRegistrationTaskInput: _Structure_ = {
  type: "structure",
  required: ["taskId"],
  members: {
    taskId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "taskId"
    }
  }
};
