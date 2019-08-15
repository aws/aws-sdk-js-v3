import { _LifecyclePolicyPreviewResultList } from "./_LifecyclePolicyPreviewResultList";
import { _LifecyclePolicyPreviewSummary } from "./_LifecyclePolicyPreviewSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLifecyclePolicyPreviewOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    registryId: {
      shape: {
        type: "string"
      }
    },
    repositoryName: {
      shape: {
        type: "string",
        min: 2
      }
    },
    lifecyclePolicyText: {
      shape: {
        type: "string",
        min: 100
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    previewResults: {
      shape: _LifecyclePolicyPreviewResultList
    },
    summary: {
      shape: _LifecyclePolicyPreviewSummary
    }
  }
};
