import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteApplicationReferenceDataSourceInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName", "CurrentApplicationVersionId", "ReferenceId"],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CurrentApplicationVersionId: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ReferenceId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
