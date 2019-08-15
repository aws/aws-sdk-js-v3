import { _InputStartingPositionConfiguration } from "./_InputStartingPositionConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputConfiguration: _Structure_ = {
  type: "structure",
  required: ["Id", "InputStartingPositionConfiguration"],
  members: {
    Id: {
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
