import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSecurityConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["Name", "SecurityConfiguration"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    SecurityConfiguration: {
      shape: {
        type: "string"
      }
    }
  }
};
