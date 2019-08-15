import { _RootStorage } from "./_RootStorage";
import { _UserStorage } from "./_UserStorage";
import { _ComputeType } from "./_ComputeType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkspaceBundle: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BundleId: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Owner: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    RootStorage: {
      shape: _RootStorage
    },
    UserStorage: {
      shape: _UserStorage
    },
    ComputeType: {
      shape: _ComputeType
    }
  }
};
