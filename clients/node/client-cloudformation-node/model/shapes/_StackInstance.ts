import { _Parameters } from "./_Parameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StackInstance: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackSetId: {
      shape: {
        type: "string"
      }
    },
    Region: {
      shape: {
        type: "string"
      }
    },
    Account: {
      shape: {
        type: "string"
      }
    },
    StackId: {
      shape: {
        type: "string"
      }
    },
    ParameterOverrides: {
      shape: _Parameters
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    StatusReason: {
      shape: {
        type: "string"
      }
    }
  }
};
