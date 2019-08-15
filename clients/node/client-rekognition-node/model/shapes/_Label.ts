import { _Instances } from "./_Instances";
import { _Parents } from "./_Parents";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Label: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Confidence: {
      shape: {
        type: "float"
      }
    },
    Instances: {
      shape: _Instances
    },
    Parents: {
      shape: _Parents
    }
  }
};
