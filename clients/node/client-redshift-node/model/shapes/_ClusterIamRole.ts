import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClusterIamRole: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IamRoleArn: {
      shape: {
        type: "string"
      }
    },
    ApplyStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
