import { _InputStartingPositionConfiguration } from "./_InputStartingPositionConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SqlRunConfiguration: _Structure_ = {
  type: "structure",
  required: ["InputId", "InputStartingPositionConfiguration"],
  members: {
    InputId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InputStartingPositionConfiguration: {
      shape: _InputStartingPositionConfiguration
    }
  }
};
