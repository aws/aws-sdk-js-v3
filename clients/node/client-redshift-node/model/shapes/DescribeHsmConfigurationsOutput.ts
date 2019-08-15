import { _HsmConfigurationList } from "./_HsmConfigurationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeHsmConfigurationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    HsmConfigurations: {
      shape: _HsmConfigurationList
    }
  }
};
