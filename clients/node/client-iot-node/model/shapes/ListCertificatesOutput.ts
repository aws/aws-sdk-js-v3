import { _Certificates } from "./_Certificates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCertificatesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    certificates: {
      shape: _Certificates
    },
    nextMarker: {
      shape: {
        type: "string"
      }
    }
  }
};
