import { _ParametersMap } from "./_ParametersMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SerDeInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SerializationLibrary: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Parameters: {
      shape: _ParametersMap
    }
  }
};
