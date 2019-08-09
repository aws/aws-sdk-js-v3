import { _SigningConfigurationOverrides } from "./_SigningConfigurationOverrides";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SigningPlatformOverrides: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    signingConfiguration: {
      shape: _SigningConfigurationOverrides
    }
  }
};
