import { _ActionConfigurationMap } from "./_ActionConfigurationMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActionConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    configuration: {
      shape: _ActionConfigurationMap
    }
  }
};
