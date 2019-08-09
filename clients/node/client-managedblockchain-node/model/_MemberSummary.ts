import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MemberSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    },
    IsOwned: {
      shape: {
        type: "boolean"
      }
    }
  }
};
