import { _CertificateList } from "./_CertificateList";
import { _Actions } from "./_Actions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateListenerInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerArn", "Protocol", "Port", "DefaultActions"],
  members: {
    LoadBalancerArn: {
      shape: {
        type: "string"
      }
    },
    Protocol: {
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
    SslPolicy: {
      shape: {
        type: "string"
      }
    },
    Certificates: {
      shape: _CertificateList
    },
    DefaultActions: {
      shape: _Actions
    }
  }
};
