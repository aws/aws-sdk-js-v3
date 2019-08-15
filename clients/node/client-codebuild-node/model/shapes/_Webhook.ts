import { _FilterGroups } from "./_FilterGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Webhook: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    url: {
      shape: {
        type: "string",
        min: 1
      }
    },
    payloadUrl: {
      shape: {
        type: "string",
        min: 1
      }
    },
    secret: {
      shape: {
        type: "string",
        min: 1
      }
    },
    branchFilter: {
      shape: {
        type: "string"
      }
    },
    filterGroups: {
      shape: _FilterGroups
    },
    lastModifiedSecret: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
