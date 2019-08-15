import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListQualificationTypesInput: _Structure_ = {
  type: "structure",
  required: ["MustBeRequestable"],
  members: {
    Query: {
      shape: {
        type: "string"
      }
    },
    MustBeRequestable: {
      shape: {
        type: "boolean"
      }
    },
    MustBeOwnedByCaller: {
      shape: {
        type: "boolean"
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
