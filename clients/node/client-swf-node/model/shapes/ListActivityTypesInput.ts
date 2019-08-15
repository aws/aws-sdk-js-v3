import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListActivityTypesInput: _Structure_ = {
  type: "structure",
  required: ["domain", "registrationStatus"],
  members: {
    domain: {
      shape: {
        type: "string",
        min: 1
      }
    },
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    registrationStatus: {
      shape: {
        type: "string"
      }
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    },
    maximumPageSize: {
      shape: {
        type: "integer"
      }
    },
    reverseOrder: {
      shape: {
        type: "boolean"
      }
    }
  }
};
