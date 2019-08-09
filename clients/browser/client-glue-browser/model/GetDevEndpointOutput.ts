import { _DevEndpoint } from "./_DevEndpoint";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDevEndpointOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DevEndpoint: {
      shape: _DevEndpoint
    }
  }
};
