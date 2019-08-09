import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateEventTrackerInput: _Structure_ = {
  type: "structure",
  required: ["name", "datasetGroupArn"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    datasetGroupArn: {
      shape: {
        type: "string"
      }
    }
  }
};
