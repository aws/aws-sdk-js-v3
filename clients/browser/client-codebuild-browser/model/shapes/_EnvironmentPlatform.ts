import { _EnvironmentLanguages } from "./_EnvironmentLanguages";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EnvironmentPlatform: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    platform: {
      shape: {
        type: "string"
      }
    },
    languages: {
      shape: _EnvironmentLanguages
    }
  }
};
