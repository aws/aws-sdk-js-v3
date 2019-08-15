import { _EnvironmentVariables } from "./_EnvironmentVariables";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Environment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Variables: {
      shape: _EnvironmentVariables
    }
  }
};
