import { _ImageIdentifierList } from "./_ImageIdentifierList";
import { _LifecyclePolicyPreviewFilter } from "./_LifecyclePolicyPreviewFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLifecyclePolicyPreviewInput: _Structure_ = {
  type: "structure",
  required: ["repositoryName"],
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
    imageIds: {
      shape: _ImageIdentifierList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    filter: {
      shape: _LifecyclePolicyPreviewFilter
    }
  }
};
