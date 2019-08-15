import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConfigOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigType: {
      shape: {
        type: "string"
      }
    },
    ConfigFile: {
      shape: {
        type: "string"
      }
    },
    ConfigCred: {
      shape: {
        type: "string"
      }
    }
  }
};
