import { _ParametersMap } from "./_ParametersMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Database: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    LocationUri: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Parameters: {
      shape: _ParametersMap
    },
    CreateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
