import { _RemediationConfigurations } from "./_RemediationConfigurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutRemediationConfigurationsInput: _Structure_ = {
  type: "structure",
  required: ["RemediationConfigurations"],
  members: {
    RemediationConfigurations: {
      shape: _RemediationConfigurations
    }
  }
};
