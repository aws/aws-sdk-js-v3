import { _MapOfStringToBoolean } from "./_MapOfStringToBoolean";
import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMethodResponseOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    statusCode: {
      shape: {
        type: "string"
      }
    },
    responseParameters: {
      shape: _MapOfStringToBoolean
    },
    responseModels: {
      shape: _MapOfStringToString
    }
  }
};
