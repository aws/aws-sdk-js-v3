import { _Filters } from "./_Filters";
import { _OrderByList } from "./_OrderByList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListConfigurationsInput: _Structure_ = {
  type: "structure",
  required: ["configurationType"],
  members: {
    configurationType: {
      shape: {
        type: "string"
      }
    },
    filters: {
      shape: _Filters
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    orderBy: {
      shape: _OrderByList
    }
  }
};
