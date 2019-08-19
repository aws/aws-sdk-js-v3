import { _TopicAttributesMap } from "./_TopicAttributesMap";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTopicInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Attributes: {
      shape: _TopicAttributesMap
    },
    Tags: {
      shape: _TagList
    }
  }
};
