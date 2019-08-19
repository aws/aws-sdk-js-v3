import { _CertificateList } from "./_CertificateList";
import { _Actions } from "./_Actions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Listener: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ListenerArn: {
      shape: {
        type: "string"
      }
    },
    LoadBalancerArn: {
      shape: {
        type: "string"
      }
    },
    Port: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Protocol: {
      shape: {
        type: "string"
      }
    },
    Certificates: {
      shape: _CertificateList
    },
    SslPolicy: {
      shape: {
        type: "string"
      }
    },
    DefaultActions: {
      shape: _Actions
    }
  }
};
