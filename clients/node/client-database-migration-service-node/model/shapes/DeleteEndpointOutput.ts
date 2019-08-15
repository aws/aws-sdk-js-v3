import { _Endpoint } from "./_Endpoint";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteEndpointOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Endpoint: {
      shape: _Endpoint
    }
  }
};
