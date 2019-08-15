import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateManagedInstanceRoleInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId", "IamRole"],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    IamRole: {
      shape: {
        type: "string"
      }
    }
  }
};
