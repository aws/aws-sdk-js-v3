import { _InputConfiguration } from "./_InputConfiguration";
import { _InputDefinition } from "./_InputDefinition";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Input: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    inputConfiguration: {
      shape: _InputConfiguration
    },
    inputDefinition: {
      shape: _InputDefinition
    }
  }
};
