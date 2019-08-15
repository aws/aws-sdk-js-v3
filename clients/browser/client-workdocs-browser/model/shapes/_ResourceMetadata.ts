import { _UserMetadata } from "./_UserMetadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Type: {
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
    OriginalName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VersionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Owner: {
      shape: _UserMetadata
    },
    ParentId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
