import { _certificateListType } from "./_certificateListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSigningCertificatesOutput: _Structure_ = {
  type: "structure",
  required: ["Certificates"],
  members: {
    Certificates: {
      shape: _certificateListType
    },
    IsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
