import { ___listOfPlaybackConfigurations } from "./___listOfPlaybackConfigurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPlaybackConfigurationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Items: {
      shape: ___listOfPlaybackConfigurations
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
