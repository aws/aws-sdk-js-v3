import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopThingRegistrationTaskInput: _Structure_ = {
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
