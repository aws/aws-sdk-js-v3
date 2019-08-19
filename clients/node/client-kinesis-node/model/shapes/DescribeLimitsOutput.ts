import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLimitsOutput: _Structure_ = {
  type: "structure",
  required: ["ShardLimit", "OpenShardCount"],
  members: {
    ShardLimit: {
      shape: {
        type: "integer"
      }
    },
    OpenShardCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
