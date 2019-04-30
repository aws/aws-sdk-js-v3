import { _LifecycleExpiration } from "./_LifecycleExpiration";
import { _Transition } from "./_Transition";
import { _NoncurrentVersionTransition } from "./_NoncurrentVersionTransition";
import { _NoncurrentVersionExpiration } from "./_NoncurrentVersionExpiration";
import { _AbortIncompleteMultipartUpload } from "./_AbortIncompleteMultipartUpload";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Rule: _Structure_ = {
  type: "structure",
  required: ["Prefix", "Status"],
  members: {
    Expiration: {
      shape: _LifecycleExpiration
    },
    ID: {
      shape: {
        type: "string"
      }
    },
    Prefix: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    Transition: {
      shape: _Transition
    },
    NoncurrentVersionTransition: {
      shape: _NoncurrentVersionTransition
    },
    NoncurrentVersionExpiration: {
      shape: _NoncurrentVersionExpiration
    },
    AbortIncompleteMultipartUpload: {
      shape: _AbortIncompleteMultipartUpload
    }
  }
};
