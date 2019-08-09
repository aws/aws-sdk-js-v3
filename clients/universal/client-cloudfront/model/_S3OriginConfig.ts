import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3OriginConfig: _Structure_ = {
  type: "structure",
  required: ["OriginAccessIdentity"],
  members: {
    OriginAccessIdentity: {
      shape: {
        type: "string"
      }
    }
  }
};
