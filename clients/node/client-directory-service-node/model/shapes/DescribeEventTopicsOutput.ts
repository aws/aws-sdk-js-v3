import { _EventTopics } from "./_EventTopics";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventTopicsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EventTopics: {
      shape: _EventTopics
    }
  }
};
