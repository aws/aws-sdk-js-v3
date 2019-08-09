import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PolicyRole: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RoleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RoleId: {
      shape: {
        type: "string",
        min: 16
      }
    }
  }
};
