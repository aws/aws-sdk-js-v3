import { _Configurations } from "./_Configurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListConfigurationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    configurations: {
      shape: _Configurations
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
