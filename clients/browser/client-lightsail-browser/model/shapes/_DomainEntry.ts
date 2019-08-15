import { _DomainEntryOptions } from "./_DomainEntryOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DomainEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    target: {
      shape: {
        type: "string"
      }
    },
    isAlias: {
      shape: {
        type: "boolean"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    options: {
      shape: _DomainEntryOptions
    }
  }
};
