import { _Eq } from "./_Eq";
import { _Neq } from "./_Neq";
import { _Equals } from "./_Equals";
import { _NotEquals } from "./_NotEquals";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Condition: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Eq: {
      shape: _Eq,
      locationName: "eq"
    },
    Neq: {
      shape: _Neq,
      locationName: "neq"
    },
    Gt: {
      shape: {
        type: "integer"
      },
      locationName: "gt"
    },
    Gte: {
      shape: {
        type: "integer"
      },
      locationName: "gte"
    },
    Lt: {
      shape: {
        type: "integer"
      },
      locationName: "lt"
    },
    Lte: {
      shape: {
        type: "integer"
      },
      locationName: "lte"
    },
    Equals: {
      shape: _Equals,
      locationName: "equals"
    },
    NotEquals: {
      shape: _NotEquals,
      locationName: "notEquals"
    },
    GreaterThan: {
      shape: {
        type: "integer"
      },
      locationName: "greaterThan"
    },
    GreaterThanOrEqual: {
      shape: {
        type: "integer"
      },
      locationName: "greaterThanOrEqual"
    },
    LessThan: {
      shape: {
        type: "integer"
      },
      locationName: "lessThan"
    },
    LessThanOrEqual: {
      shape: {
        type: "integer"
      },
      locationName: "lessThanOrEqual"
    }
  }
};
