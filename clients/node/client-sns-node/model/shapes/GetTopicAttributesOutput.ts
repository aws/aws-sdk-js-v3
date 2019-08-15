import { _TopicAttributesMap } from "./_TopicAttributesMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTopicAttributesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Attributes: {
      shape: _TopicAttributesMap
    }
  }
};
