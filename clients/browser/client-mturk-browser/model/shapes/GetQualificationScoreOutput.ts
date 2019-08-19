import { _Qualification } from "./_Qualification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetQualificationScoreOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Qualification: {
      shape: _Qualification
    }
  }
};
