import { _FindingStatistics } from "./_FindingStatistics";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFindingsStatisticsOutput: _Structure_ = {
  type: "structure",
  required: ["FindingStatistics"],
  members: {
    FindingStatistics: {
      shape: _FindingStatistics,
      locationName: "findingStatistics"
    }
  }
};
