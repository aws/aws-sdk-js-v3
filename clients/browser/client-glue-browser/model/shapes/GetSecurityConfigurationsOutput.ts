import { _SecurityConfigurationList } from "./_SecurityConfigurationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSecurityConfigurationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SecurityConfigurations: {
      shape: _SecurityConfigurationList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
