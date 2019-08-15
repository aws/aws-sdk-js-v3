import { _ConfigurationIdList } from "./_ConfigurationIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateConfigurationItemsFromApplicationInput: _Structure_ = {
  type: "structure",
  required: ["applicationConfigurationId", "configurationIds"],
  members: {
    applicationConfigurationId: {
      shape: {
        type: "string"
      }
    },
    configurationIds: {
      shape: _ConfigurationIdList
    }
  }
};
