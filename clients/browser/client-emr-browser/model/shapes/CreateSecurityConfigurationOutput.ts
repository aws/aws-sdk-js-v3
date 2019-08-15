import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSecurityConfigurationOutput: _Structure_ = {
  type: "structure",
  required: ["Name", "CreationDateTime"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    CreationDateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
