import { _ListOfEndpoints } from "./_ListOfEndpoints";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListEndpointsByPlatformApplicationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Endpoints: {
      shape: _ListOfEndpoints
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
