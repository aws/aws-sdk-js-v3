import { _TransformJobDefinition } from "./_TransformJobDefinition";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ModelPackageValidationProfile: _Structure_ = {
  type: "structure",
  required: ["ProfileName", "TransformJobDefinition"],
  members: {
    ProfileName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TransformJobDefinition: {
      shape: _TransformJobDefinition
    }
  }
};
