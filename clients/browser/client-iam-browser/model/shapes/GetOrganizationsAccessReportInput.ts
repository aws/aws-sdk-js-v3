import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetOrganizationsAccessReportInput: _Structure_ = {
  type: "structure",
  required: ["JobId"],
  members: {
    JobId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    MaxItems: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SortKey: {
      shape: {
        type: "string"
      }
    }
  }
};
