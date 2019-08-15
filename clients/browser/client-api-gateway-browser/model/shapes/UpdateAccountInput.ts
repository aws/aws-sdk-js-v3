import { _ListOfPatchOperation } from "./_ListOfPatchOperation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateAccountInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    patchOperations: {
      shape: _ListOfPatchOperation
    }
  }
};
