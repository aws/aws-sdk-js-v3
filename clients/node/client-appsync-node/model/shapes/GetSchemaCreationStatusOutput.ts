import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSchemaCreationStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    status: {
      shape: {
        type: "string"
      }
    },
    details: {
      shape: {
        type: "string"
      }
    }
  }
};
