import { _OriginSslProtocols } from "./_OriginSslProtocols";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CustomOriginConfig: _Structure_ = {
  type: "structure",
  required: ["HTTPPort", "HTTPSPort", "OriginProtocolPolicy"],
  members: {
    HTTPPort: {
      shape: {
        type: "integer"
      }
    },
    HTTPSPort: {
      shape: {
        type: "integer"
      }
    },
    OriginProtocolPolicy: {
      shape: {
        type: "string"
      }
    },
    OriginSslProtocols: {
      shape: _OriginSslProtocols
    },
    OriginReadTimeout: {
      shape: {
        type: "integer"
      }
    },
    OriginKeepaliveTimeout: {
      shape: {
        type: "integer"
      }
    }
  }
};
