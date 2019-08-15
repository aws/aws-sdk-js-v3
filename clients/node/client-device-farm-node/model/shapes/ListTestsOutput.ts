import { _Tests } from "./_Tests";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTestsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    tests: {
      shape: _Tests
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
