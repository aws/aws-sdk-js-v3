import { _DurationRange } from "./_DurationRange";
import { _FilterRulesPackageArnList } from "./_FilterRulesPackageArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AssessmentTemplateFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    namePattern: {
      shape: {
        type: "string",
        min: 1
      }
    },
    durationRange: {
      shape: _DurationRange
    },
    rulesPackageArns: {
      shape: _FilterRulesPackageArnList
    }
  }
};
