import { _Suites } from "./_Suites";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSuitesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    suites: {
      shape: _Suites
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
