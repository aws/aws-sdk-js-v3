import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterDefaultPatchBaselineInput: _Structure_ = {
  type: "structure",
  required: ["BaselineId"],
  members: {
    BaselineId: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
