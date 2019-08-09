import { _TopicsList } from "./_TopicsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTopicsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Topics: {
      shape: _TopicsList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
