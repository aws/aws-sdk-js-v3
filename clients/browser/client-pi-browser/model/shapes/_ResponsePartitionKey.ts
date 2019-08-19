import { _DimensionMap } from "./_DimensionMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResponsePartitionKey: _Structure_ = {
  type: "structure",
  required: ["Dimensions"],
  members: {
    Dimensions: {
      shape: _DimensionMap
    }
  }
};
