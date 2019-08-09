import { _VPCEConfigurations } from "./_VPCEConfigurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListVPCEConfigurationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    vpceConfigurations: {
      shape: _VPCEConfigurations
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
