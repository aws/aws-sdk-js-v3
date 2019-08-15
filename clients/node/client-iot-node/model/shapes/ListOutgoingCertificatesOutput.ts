import { _OutgoingCertificates } from "./_OutgoingCertificates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListOutgoingCertificatesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    outgoingCertificates: {
      shape: _OutgoingCertificates
    },
    nextMarker: {
      shape: {
        type: "string"
      }
    }
  }
};
