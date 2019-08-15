import { _NewDhcpConfigurationList } from "./_NewDhcpConfigurationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDhcpOptionsInput: _Structure_ = {
  type: "structure",
  required: ["DhcpConfigurations"],
  members: {
    DhcpConfigurations: {
      shape: _NewDhcpConfigurationList,
      locationName: "dhcpConfiguration"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
