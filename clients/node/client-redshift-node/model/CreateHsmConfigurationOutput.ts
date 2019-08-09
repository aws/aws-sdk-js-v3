import { _HsmConfiguration } from "./_HsmConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateHsmConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HsmConfiguration: {
      shape: _HsmConfiguration
    }
  }
};
