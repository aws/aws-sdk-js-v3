import { _Resources } from "./_Resources";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResourcesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Resources: {
      shape: _Resources
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
