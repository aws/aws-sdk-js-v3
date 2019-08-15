import { _S3GrantList } from "./_S3GrantList";
import { _S3ObjectMetadata } from "./_S3ObjectMetadata";
import { _S3TagSet } from "./_S3TagSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3CopyObjectOperation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TargetResource: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CannedAccessControlList: {
      shape: {
        type: "string"
      }
    },
    AccessControlGrants: {
      shape: _S3GrantList
    },
    MetadataDirective: {
      shape: {
        type: "string"
      }
    },
    ModifiedSinceConstraint: {
      shape: {
        type: "timestamp"
      }
    },
    NewObjectMetadata: {
      shape: _S3ObjectMetadata
    },
    NewObjectTagging: {
      shape: _S3TagSet
    },
    RedirectLocation: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RequesterPays: {
      shape: {
        type: "boolean"
      }
    },
    StorageClass: {
      shape: {
        type: "string"
      }
    },
    UnModifiedSinceConstraint: {
      shape: {
        type: "timestamp"
      }
    },
    SSEAwsKmsKeyId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TargetKeyPrefix: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ObjectLockLegalHoldStatus: {
      shape: {
        type: "string"
      }
    },
    ObjectLockMode: {
      shape: {
        type: "string"
      }
    },
    ObjectLockRetainUntilDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
