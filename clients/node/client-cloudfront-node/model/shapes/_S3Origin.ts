import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3Origin: _Structure_ = {
  type: "structure",
  required: ["DomainName", "OriginAccessIdentity"],
  members: {
    DomainName: {
      shape: {
        type: "string"
      }
    },
    OriginAccessIdentity: {
      shape: {
        type: "string"
      }
    }
  }
};
