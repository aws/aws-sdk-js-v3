import { _Attributes } from "./_Attributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Resource: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    type: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    feature: {
      shape: {
        type: "string"
      }
    },
    attributes: {
      shape: _Attributes
    }
  }
};
