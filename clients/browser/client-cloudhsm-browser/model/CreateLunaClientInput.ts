import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLunaClientInput: _Structure_ = {
  type: "structure",
  required: ["Certificate"],
  members: {
    Label: {
      shape: {
        type: "string"
      }
    },
    Certificate: {
      shape: {
        type: "string",
        min: 600
      }
    }
  }
};
