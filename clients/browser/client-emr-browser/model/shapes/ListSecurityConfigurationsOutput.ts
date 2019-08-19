import { _SecurityConfigurationList } from "./_SecurityConfigurationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSecurityConfigurationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SecurityConfigurations: {
      shape: _SecurityConfigurationList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
