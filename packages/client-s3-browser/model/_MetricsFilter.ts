import { _Tag } from "./_Tag";
import { _MetricsAndOperator } from "./_MetricsAndOperator";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MetricsFilter: _Structure_ = {
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
      shape: _MetricsAndOperator
    }
  }
};
