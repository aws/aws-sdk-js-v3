import { _StatusCodes } from "./_StatusCodes";
import { _Latency } from "./_Latency";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationMetrics: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Duration: {
      shape: {
        type: "integer"
      }
    },
    RequestCount: {
      shape: {
        type: "integer"
      }
    },
    StatusCodes: {
      shape: _StatusCodes
    },
    Latency: {
      shape: _Latency
    }
  }
};
