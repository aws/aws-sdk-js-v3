import { _Statistics } from "./_Statistics";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetStatisticsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    statistics: {
      shape: _Statistics
    }
  }
};
