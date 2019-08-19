import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetOpsItemInput: _Structure_ = {
  type: "structure",
  required: ["OpsItemId"],
  members: {
    OpsItemId: {
      shape: {
        type: "string"
      }
    }
  }
};
