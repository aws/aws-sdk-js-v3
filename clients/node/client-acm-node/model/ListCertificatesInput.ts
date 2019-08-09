import { _CertificateStatuses } from "./_CertificateStatuses";
import { _Filters } from "./_Filters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCertificatesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CertificateStatuses: {
      shape: _CertificateStatuses
    },
    Includes: {
      shape: _Filters
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxItems: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
