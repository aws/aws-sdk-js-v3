import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemovePermissionInput: _Structure_ = {
  type: "structure",
  required: ["FunctionName", "StatementId"],
  members: {
    FunctionName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "FunctionName"
    },
    StatementId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "StatementId"
    },
    Qualifier: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "Qualifier"
    },
    RevisionId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "RevisionId"
    }
  }
};
