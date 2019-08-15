import { _policyDocumentVersionListType } from "./_policyDocumentVersionListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ManagedPolicyDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PolicyId: {
      shape: {
        type: "string",
        min: 16
      }
    },
    Arn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Path: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DefaultVersionId: {
      shape: {
        type: "string"
      }
    },
    AttachmentCount: {
      shape: {
        type: "integer"
      }
    },
    PermissionsBoundaryUsageCount: {
      shape: {
        type: "integer"
      }
    },
    IsAttachable: {
      shape: {
        type: "boolean"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    CreateDate: {
      shape: {
        type: "timestamp"
      }
    },
    UpdateDate: {
      shape: {
        type: "timestamp"
      }
    },
    PolicyVersionList: {
      shape: _policyDocumentVersionListType
    }
  }
};
