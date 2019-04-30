import { _Encryption } from "./_Encryption";
import { _AccessControlPolicyList } from "./_AccessControlPolicyList";
import { _hashmap } from "./_hashmap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3Location: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BucketName: {
      shape: {
        type: "string"
      }
    },
    Prefix: {
      shape: {
        type: "string"
      }
    },
    Encryption: {
      shape: _Encryption
    },
    CannedACL: {
      shape: {
        type: "string"
      }
    },
    AccessControlList: {
      shape: _AccessControlPolicyList
    },
    Tagging: {
      shape: _hashmap
    },
    UserMetadata: {
      shape: _hashmap
    },
    StorageClass: {
      shape: {
        type: "string"
      }
    }
  }
};
