import { _Scope } from "./_Scope";
import { _ResourceChangeDetails } from "./_ResourceChangeDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceChange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Action: {
      shape: {
        type: "string"
      }
    },
    LogicalResourceId: {
      shape: {
        type: "string"
      }
    },
    PhysicalResourceId: {
      shape: {
        type: "string"
      }
    },
    ResourceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Replacement: {
      shape: {
        type: "string"
      }
    },
    Scope: {
      shape: _Scope
    },
    Details: {
      shape: _ResourceChangeDetails
    }
  }
};
