import { _accessKeyMetadataListType } from "./_accessKeyMetadataListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAccessKeysOutput: _Structure_ = {
  type: "structure",
  required: ["AccessKeyMetadata"],
  members: {
    AccessKeyMetadata: {
      shape: _accessKeyMetadataListType
    },
    IsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
