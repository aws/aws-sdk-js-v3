import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrustedAdvisorResourceDetail: _Structure_ = {
  type: "structure",
  required: ["status", "resourceId", "metadata"],
  members: {
    status: {
      shape: {
        type: "string"
      }
    },
    region: {
      shape: {
        type: "string"
      }
    },
    resourceId: {
      shape: {
        type: "string"
      }
    },
    isSuppressed: {
      shape: {
        type: "boolean"
      }
    },
    metadata: {
      shape: _StringList
    }
  }
};
