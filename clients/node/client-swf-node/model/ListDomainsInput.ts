import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDomainsInput: _Structure_ = {
  type: "structure",
  required: ["registrationStatus"],
  members: {
    nextPageToken: {
      shape: {
        type: "string"
      }
    },
    registrationStatus: {
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
