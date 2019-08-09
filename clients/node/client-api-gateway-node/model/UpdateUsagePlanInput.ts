import { _ListOfPatchOperation } from "./_ListOfPatchOperation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateUsagePlanInput: _Structure_ = {
  type: "structure",
  required: ["usagePlanId"],
  members: {
    usagePlanId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "usageplanId"
    },
    patchOperations: {
      shape: _ListOfPatchOperation
    }
  }
};
