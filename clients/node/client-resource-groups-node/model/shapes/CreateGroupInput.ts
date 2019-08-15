import { _ResourceQuery } from "./_ResourceQuery";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateGroupInput: _Structure_ = {
  type: "structure",
  required: ["Name", "ResourceQuery"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    ResourceQuery: {
      shape: _ResourceQuery
    },
    Tags: {
      shape: _Tags
    }
  }
};
