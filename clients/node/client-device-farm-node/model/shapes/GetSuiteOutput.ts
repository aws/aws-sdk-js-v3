import { _Suite } from "./_Suite";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSuiteOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    suite: {
      shape: _Suite
    }
  }
};
