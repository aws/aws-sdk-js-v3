import { _EndpointSummaryList } from "./_EndpointSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListEndpointsOutput: _Structure_ = {
  type: "structure",
  required: ["Endpoints"],
  members: {
    Endpoints: {
      shape: _EndpointSummaryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
