import { _Budget } from "./_Budget";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBudgetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Budget: {
      shape: _Budget
    }
  }
};
