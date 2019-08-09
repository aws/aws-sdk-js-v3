import { _SampledHTTPRequests } from "./_SampledHTTPRequests";
import { _TimeWindow } from "./_TimeWindow";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSampledRequestsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SampledRequests: {
      shape: _SampledHTTPRequests
    },
    PopulationSize: {
      shape: {
        type: "integer"
      }
    },
    TimeWindow: {
      shape: _TimeWindow
    }
  }
};
