import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelImportTaskOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ImportTaskId: {
      shape: {
        type: "string"
      },
      locationName: "importTaskId"
    },
    PreviousState: {
      shape: {
        type: "string"
      },
      locationName: "previousState"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    }
  }
};
