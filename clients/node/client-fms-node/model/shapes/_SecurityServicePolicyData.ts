import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SecurityServicePolicyData: _Structure_ = {
  type: "structure",
  required: ["Type"],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    ManagedServiceData: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
