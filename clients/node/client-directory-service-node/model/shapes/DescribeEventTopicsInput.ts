import { _TopicNames } from "./_TopicNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventTopicsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    TopicNames: {
      shape: _TopicNames
    }
  }
};
