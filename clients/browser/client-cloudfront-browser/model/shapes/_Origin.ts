import { _CustomHeaders } from "./_CustomHeaders";
import { _S3OriginConfig } from "./_S3OriginConfig";
import { _CustomOriginConfig } from "./_CustomOriginConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Origin: _Structure_ = {
  type: "structure",
  required: ["Id", "DomainName"],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    DomainName: {
      shape: {
        type: "string"
      }
    },
    OriginPath: {
      shape: {
        type: "string"
      }
    },
    CustomHeaders: {
      shape: _CustomHeaders
    },
    S3OriginConfig: {
      shape: _S3OriginConfig
    },
    CustomOriginConfig: {
      shape: _CustomOriginConfig
    }
  }
};
