import { _Expressions } from "./_Expressions";
import { _Expression } from "./_Expression";
import { _DimensionValues } from "./_DimensionValues";
import { _TagValues } from "./_TagValues";
import { Structure as _Structure_ } from "@aws-sdk/types";
import { Member as _Member_ } from "@aws-sdk/types";

export const _Expression: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Or: {
      shape: _Expressions
    },
    And: {
      shape: _Expressions
    },
    get Not(): _Member_ {
      Object.defineProperty(_Expression, "Not", {
        value: {
          shape: _Expression
        }
      });
      return {
        shape: _Expression
      };
    },
    Dimensions: {
      shape: _DimensionValues
    },
    Tags: {
      shape: _TagValues
    }
  }
};
