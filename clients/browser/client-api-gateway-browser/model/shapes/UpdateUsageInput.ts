import { _ListOfPatchOperation } from "./_ListOfPatchOperation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateUsageInput: _Structure_ = {
  type: "structure",
  required: ["usagePlanId", "keyId"],
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
      },
      location: "uri",
      locationName: "keyId"
    },
    patchOperations: {
      shape: _ListOfPatchOperation
    }
  }
};
