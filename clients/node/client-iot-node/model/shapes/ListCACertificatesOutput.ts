import { _CACertificates } from "./_CACertificates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCACertificatesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    certificates: {
      shape: _CACertificates
    },
    nextMarker: {
      shape: {
        type: "string"
      }
    }
  }
};
