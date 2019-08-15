import { _Tag } from "./_Tag";
import { _AnalyticsAndOperator } from "./_AnalyticsAndOperator";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AnalyticsFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Prefix: {
      shape: {
        type: "string"
      }
    },
    Tag: {
      shape: _Tag
    },
    And: {
      shape: _AnalyticsAndOperator
    }
  }
};
