import { _SignedHeaderMap } from "./_SignedHeaderMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UploadMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UploadUrl: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    SignedHeaders: {
      shape: _SignedHeaderMap
    }
  }
};
