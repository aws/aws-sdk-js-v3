import { _EntityFilter } from "./_EntityFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAffectedEntitiesInput: _Structure_ = {
  type: "structure",
  required: ["filter"],
  members: {
    filter: {
      shape: _EntityFilter
    },
    locale: {
      shape: {
        type: "string",
        min: 2
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 10
      }
    }
  }
};
