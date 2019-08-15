import { _NamespaceProperties } from "./_NamespaceProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Namespace: _Structure_ = {
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
    Name: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    ServiceCount: {
      shape: {
        type: "integer"
      }
    },
    Properties: {
      shape: _NamespaceProperties
    },
    CreateDate: {
      shape: {
        type: "timestamp"
      }
    },
    CreatorRequestId: {
      shape: {
        type: "string"
      }
    }
  }
};
