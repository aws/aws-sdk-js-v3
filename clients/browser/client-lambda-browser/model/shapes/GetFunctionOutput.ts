import { _FunctionConfiguration } from "./_FunctionConfiguration";
import { _FunctionCodeLocation } from "./_FunctionCodeLocation";
import { _Tags } from "./_Tags";
import { _Concurrency } from "./_Concurrency";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFunctionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Configuration: {
      shape: _FunctionConfiguration
    },
    Code: {
      shape: _FunctionCodeLocation
    },
    Tags: {
      shape: _Tags
    },
    Concurrency: {
      shape: _Concurrency
    }
  }
};
