import { _AssessmentRunStateList } from "./_AssessmentRunStateList";
import { _DurationRange } from "./_DurationRange";
import { _FilterRulesPackageArnList } from "./_FilterRulesPackageArnList";
import { _TimestampRange } from "./_TimestampRange";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AssessmentRunFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    namePattern: {
      shape: {
        type: "string",
        min: 1
      }
    },
    states: {
      shape: _AssessmentRunStateList
    },
    durationRange: {
      shape: _DurationRange
    },
    rulesPackageArns: {
      shape: _FilterRulesPackageArnList
    },
    startTimeRange: {
      shape: _TimestampRange
    },
    completionTimeRange: {
      shape: _TimestampRange
    },
    stateChangeTimeRange: {
      shape: _TimestampRange
    }
  }
};
