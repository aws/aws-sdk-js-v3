import { _ImageFormats } from "./_ImageFormats";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SigningImageFormat: _Structure_ = {
  type: "structure",
  required: ["supportedFormats", "defaultFormat"],
  members: {
    supportedFormats: {
      shape: _ImageFormats
    },
    defaultFormat: {
      shape: {
        type: "string"
      }
    }
  }
};
