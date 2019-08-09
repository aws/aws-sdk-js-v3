import { _ConfigurationId } from "./_ConfigurationId";
import { ___listOfConfigurationId } from "./___listOfConfigurationId";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Configurations: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Current: {
      shape: _ConfigurationId,
      locationName: "current"
    },
    History: {
      shape: ___listOfConfigurationId,
      locationName: "history"
    },
    Pending: {
      shape: _ConfigurationId,
      locationName: "pending"
    }
  }
};
