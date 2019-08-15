import { _AdjustmentTypes } from "./_AdjustmentTypes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAdjustmentTypesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AdjustmentTypes: {
      shape: _AdjustmentTypes
    }
  }
};
