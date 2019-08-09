import { _CountBySeverity } from "./_CountBySeverity";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FindingStatistics: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CountBySeverity: {
      shape: _CountBySeverity,
      locationName: "countBySeverity"
    }
  }
};
