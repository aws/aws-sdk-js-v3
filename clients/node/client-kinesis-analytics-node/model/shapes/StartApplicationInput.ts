import { _InputConfigurations } from "./_InputConfigurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartApplicationInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName", "InputConfigurations"],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InputConfigurations: {
      shape: _InputConfigurations
    }
  }
};
