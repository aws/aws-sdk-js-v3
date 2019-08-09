import { _InputConfiguration } from "./_InputConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateInputOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    inputConfiguration: {
      shape: _InputConfiguration
    }
  }
};
