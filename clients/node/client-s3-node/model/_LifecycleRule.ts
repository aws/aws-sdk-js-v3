import { _LifecycleExpiration } from "./_LifecycleExpiration";
import { _LifecycleRuleFilter } from "./_LifecycleRuleFilter";
import { _TransitionList } from "./_TransitionList";
import { _NoncurrentVersionTransitionList } from "./_NoncurrentVersionTransitionList";
import { _NoncurrentVersionExpiration } from "./_NoncurrentVersionExpiration";
import { _AbortIncompleteMultipartUpload } from "./_AbortIncompleteMultipartUpload";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LifecycleRule: _Structure_ = {
  type: "structure",
  required: ["Status"],
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
    Filter: {
      shape: _LifecycleRuleFilter
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    Transitions: {
      shape: _TransitionList,
      locationName: "Transition"
    },
    NoncurrentVersionTransitions: {
      shape: _NoncurrentVersionTransitionList,
      locationName: "NoncurrentVersionTransition"
    },
    NoncurrentVersionExpiration: {
      shape: _NoncurrentVersionExpiration
    },
    AbortIncompleteMultipartUpload: {
      shape: _AbortIncompleteMultipartUpload
    }
  }
};
