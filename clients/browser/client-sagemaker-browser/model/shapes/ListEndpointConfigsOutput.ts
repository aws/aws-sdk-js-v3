import { _EndpointConfigSummaryList } from "./_EndpointConfigSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListEndpointConfigsOutput: _Structure_ = {
  type: "structure",
  required: ["EndpointConfigs"],
  members: {
    EndpointConfigs: {
      shape: _EndpointConfigSummaryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
