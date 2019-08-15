import { _States } from "./_States";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DetectorModelDefinition: _Structure_ = {
  type: "structure",
  required: ["states", "initialStateName"],
  members: {
    states: {
      shape: _States
    },
    initialStateName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
