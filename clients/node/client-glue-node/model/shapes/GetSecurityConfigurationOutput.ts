import { _SecurityConfiguration } from "./_SecurityConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSecurityConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SecurityConfiguration: {
      shape: _SecurityConfiguration
    }
  }
};
