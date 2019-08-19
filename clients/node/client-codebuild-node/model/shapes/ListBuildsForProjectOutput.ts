import { _BuildIds } from "./_BuildIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBuildsForProjectOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ids: {
      shape: _BuildIds
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
