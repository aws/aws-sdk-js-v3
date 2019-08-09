import { _UICustomizationType } from "./_UICustomizationType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUICustomizationOutput: _Structure_ = {
  type: "structure",
  required: ["UICustomization"],
  members: {
    UICustomization: {
      shape: _UICustomizationType
    }
  }
};
