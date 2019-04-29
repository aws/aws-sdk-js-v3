import { _InputSerialization } from "./_InputSerialization";
import { _OutputSerialization } from "./_OutputSerialization";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SelectParameters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InputSerialization: {
      shape: _InputSerialization
    },
    ExpressionType: {
      shape: {
        type: "string"
      }
    },
    Expression: {
      shape: {
        type: "string"
      }
    },
    OutputSerialization: {
      shape: _OutputSerialization
    }
  }
};
