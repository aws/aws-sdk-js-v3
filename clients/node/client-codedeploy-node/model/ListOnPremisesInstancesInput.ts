import { _TagFilterList } from "./_TagFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListOnPremisesInstancesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    registrationStatus: {
      shape: {
        type: "string"
      }
    },
    tagFilters: {
      shape: _TagFilterList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
