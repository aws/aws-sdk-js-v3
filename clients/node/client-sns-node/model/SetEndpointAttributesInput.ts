import { _MapStringToString } from "./_MapStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetEndpointAttributesInput: _Structure_ = {
  type: "structure",
  required: ["EndpointArn", "Attributes"],
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
