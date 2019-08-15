import { _Evaluations } from "./_Evaluations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutEvaluationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FailedEvaluations: {
      shape: _Evaluations
    }
  }
};
