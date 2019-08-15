import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SourceSecurityGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OwnerAlias: {
      shape: {
        type: "string"
      }
    },
    GroupName: {
      shape: {
        type: "string"
      }
    }
  }
};
