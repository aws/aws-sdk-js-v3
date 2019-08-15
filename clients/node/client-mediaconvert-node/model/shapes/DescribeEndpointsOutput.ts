import { ___listOfEndpoint } from "./___listOfEndpoint";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEndpointsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Endpoints: {
      shape: ___listOfEndpoint,
      locationName: "endpoints"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
