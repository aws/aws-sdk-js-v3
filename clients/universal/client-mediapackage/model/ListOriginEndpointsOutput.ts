import { ___listOfOriginEndpoint } from "./___listOfOriginEndpoint";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListOriginEndpointsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    OriginEndpoints: {
      shape: ___listOfOriginEndpoint,
      locationName: "originEndpoints"
    }
  }
};
