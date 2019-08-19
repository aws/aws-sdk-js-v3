import { _Filters } from "./_Filters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSimulationApplicationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    versionQualifier: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    },
    filters: {
      shape: _Filters
    }
  }
};
