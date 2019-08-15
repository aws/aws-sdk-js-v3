import { _ParameterPolicyList } from "./_ParameterPolicyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ParameterMetadata: _Structure_ = {
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
