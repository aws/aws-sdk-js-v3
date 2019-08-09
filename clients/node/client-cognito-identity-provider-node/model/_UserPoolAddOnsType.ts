import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserPoolAddOnsType: _Structure_ = {
  type: "structure",
  required: ["AdvancedSecurityMode"],
  members: {
    AdvancedSecurityMode: {
      shape: {
        type: "string"
      }
    }
  }
};
