import { _EnvironmentImages } from "./_EnvironmentImages";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EnvironmentLanguage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    language: {
      shape: {
        type: "string"
      }
    },
    images: {
      shape: _EnvironmentImages
    }
  }
};
