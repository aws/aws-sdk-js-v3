import { _CertificateList } from "./_CertificateList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveListenerCertificatesInput: _Structure_ = {
  type: "structure",
  required: ["ListenerArn", "Certificates"],
  members: {
    ListenerArn: {
      shape: {
        type: "string"
      }
    },
    Certificates: {
      shape: _CertificateList
    }
  }
};
