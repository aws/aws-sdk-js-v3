import { _CertificateList } from "./_CertificateList";
import { _Actions } from "./_Actions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyListenerInput: _Structure_ = {
  type: "structure",
  required: ["ListenerArn"],
  members: {
    ListenerArn: {
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
