import { _Evaluations } from "./_Evaluations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutEvaluationsInput: _Structure_ = {
  type: "structure",
  required: ["ResultToken"],
  members: {
    Evaluations: {
      shape: _Evaluations
    },
    ResultToken: {
      shape: {
        type: "string"
      }
    },
    TestMode: {
      shape: {
        type: "boolean"
      }
    }
  }
};
