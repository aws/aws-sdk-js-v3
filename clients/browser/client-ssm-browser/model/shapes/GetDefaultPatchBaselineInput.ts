import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDefaultPatchBaselineInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OperatingSystem: {
      shape: {
        type: "string"
      }
    }
  }
};
