import { _EntityList } from "./_EntityList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAffectedEntitiesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    entities: {
      shape: _EntityList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
