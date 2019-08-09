import { _Test } from "./_Test";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTestOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    test: {
      shape: _Test
    }
  }
};
