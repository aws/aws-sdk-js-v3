import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrustedAdvisorCheckDescription: _Structure_ = {
  type: "structure",
  required: ["id", "name", "description", "category", "metadata"],
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
    description: {
      shape: {
        type: "string"
      }
    },
    category: {
      shape: {
        type: "string"
      }
    },
    metadata: {
      shape: _StringList
    }
  }
};
