import { _ParameterLabelList } from "./_ParameterLabelList";
import { _ParameterPolicyList } from "./_ParameterPolicyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ParameterHistory: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    KeyId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    },
    LastModifiedUser: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Value: {
      shape: {
        type: "string"
      }
    },
    AllowedPattern: {
      shape: {
        type: "string"
      }
    },
    Version: {
      shape: {
        type: "integer"
      }
    },
    Labels: {
      shape: _ParameterLabelList
    },
    Tier: {
      shape: {
        type: "string"
      }
    },
    Policies: {
      shape: _ParameterPolicyList
    }
  }
};
