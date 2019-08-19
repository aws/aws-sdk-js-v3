import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateUsagePlanKeyInput: _Structure_ = {
  type: "structure",
  required: ["usagePlanId", "keyId", "keyType"],
  members: {
    usagePlanId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "usageplanId"
    },
    keyId: {
      shape: {
        type: "string"
      }
    },
    keyType: {
      shape: {
        type: "string"
      }
    }
  }
};
