import { _CloudWatchDimensionConfigurations } from "./_CloudWatchDimensionConfigurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CloudWatchDestination: _Structure_ = {
  type: "structure",
  required: ["DimensionConfigurations"],
  members: {
    DimensionConfigurations: {
      shape: _CloudWatchDimensionConfigurations
    }
  }
};
