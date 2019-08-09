import { _ScopeList } from "./_ScopeList";
import { _AttributeList } from "./_AttributeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Exclusion: _Structure_ = {
  type: "structure",
  required: ["arn", "title", "description", "recommendation", "scopes"],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    title: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    recommendation: {
      shape: {
        type: "string"
      }
    },
    scopes: {
      shape: _ScopeList
    },
    attributes: {
      shape: _AttributeList
    }
  }
};
