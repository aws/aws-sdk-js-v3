import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateActivationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ActivationId: {
      shape: {
        type: "string"
      }
    },
    ActivationCode: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
