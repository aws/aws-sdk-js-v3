import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RegistrationConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    templateBody: {
      shape: {
        type: "string"
      }
    },
    roleArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
