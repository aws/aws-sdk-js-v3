import { _CPUUtilization } from "./_CPUUtilization";
import { _LoadAverage } from "./_LoadAverage";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SystemStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CPUUtilization: {
      shape: _CPUUtilization
    },
    LoadAverage: {
      shape: _LoadAverage
    }
  }
};
