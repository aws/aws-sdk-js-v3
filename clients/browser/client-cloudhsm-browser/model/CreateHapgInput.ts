import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateHapgInput: _Structure_ = {
  type: "structure",
  required: ["Label"],
  members: {
    Label: {
      shape: {
        type: "string"
      }
    }
  }
};
