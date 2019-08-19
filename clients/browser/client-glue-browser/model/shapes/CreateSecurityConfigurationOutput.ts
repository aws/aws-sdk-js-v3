import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSecurityConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreatedTimestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
