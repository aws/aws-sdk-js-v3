import { _MapStringToString } from "./_MapStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Endpoint: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EndpointArn: {
      shape: {
        type: "string"
      }
    },
    Attributes: {
      shape: _MapStringToString
    }
  }
};
