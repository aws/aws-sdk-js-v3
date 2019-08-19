import { _VPCEConfiguration } from "./_VPCEConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVPCEConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    vpceConfiguration: {
      shape: _VPCEConfiguration
    }
  }
};
