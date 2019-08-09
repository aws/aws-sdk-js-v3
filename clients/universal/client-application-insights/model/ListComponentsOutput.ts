import { _ApplicationComponentList } from "./_ApplicationComponentList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListComponentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationComponentList: {
      shape: _ApplicationComponentList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
