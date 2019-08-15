import { _ProblemDetail } from "./_ProblemDetail";
import { _Device } from "./_Device";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Problem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    run: {
      shape: _ProblemDetail
    },
    job: {
      shape: _ProblemDetail
    },
    suite: {
      shape: _ProblemDetail
    },
    test: {
      shape: _ProblemDetail
    },
    device: {
      shape: _Device
    },
    result: {
      shape: {
        type: "string"
      }
    },
    message: {
      shape: {
        type: "string"
      }
    }
  }
};
