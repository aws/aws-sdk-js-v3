import { _ProtectedResourcesList } from "./_ProtectedResourcesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListProtectedResourcesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Results: {
      shape: _ProtectedResourcesList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
