import { _Findings } from "./_Findings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFindingsOutput: _Structure_ = {
  type: "structure",
  required: ["Findings"],
  members: {
    Findings: {
      shape: _Findings,
      locationName: "findings"
    }
  }
};
