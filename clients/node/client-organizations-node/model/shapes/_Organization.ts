import { _PolicyTypes } from "./_PolicyTypes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Organization: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Arn: {
      shape: {
        type: "string"
      }
    },
    FeatureSet: {
      shape: {
        type: "string"
      }
    },
    MasterAccountArn: {
      shape: {
        type: "string"
      }
    },
    MasterAccountId: {
      shape: {
        type: "string"
      }
    },
    MasterAccountEmail: {
      shape: {
        type: "string",
        sensitive: true,
        min: 6
      }
    },
    AvailablePolicyTypes: {
      shape: _PolicyTypes
    }
  }
};
