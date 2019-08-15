import { _LogConfigurationOptionsMap } from "./_LogConfigurationOptionsMap";
import { _SecretList } from "./_SecretList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LogConfiguration: _Structure_ = {
  type: "structure",
  required: ["logDriver"],
  members: {
    logDriver: {
      shape: {
        type: "string"
      }
    },
    options: {
      shape: _LogConfigurationOptionsMap
    },
    secretOptions: {
      shape: _SecretList
    }
  }
};
