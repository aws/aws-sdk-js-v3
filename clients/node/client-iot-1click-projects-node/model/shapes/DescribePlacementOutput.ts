import { _PlacementDescription } from "./_PlacementDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePlacementOutput: _Structure_ = {
  type: "structure",
  required: ["placement"],
  members: {
    placement: {
      shape: _PlacementDescription
    }
  }
};
