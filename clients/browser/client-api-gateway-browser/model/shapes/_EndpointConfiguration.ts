import { _ListOfEndpointType } from "./_ListOfEndpointType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EndpointConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    types: {
      shape: _ListOfEndpointType
    }
  }
};
