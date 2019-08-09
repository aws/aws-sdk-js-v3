import { _ListImagesFilter } from "./_ListImagesFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListImagesInput: _Structure_ = {
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
      shape: _ListImagesFilter
    }
  }
};
