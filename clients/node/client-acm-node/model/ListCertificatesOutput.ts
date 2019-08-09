import { _CertificateSummaryList } from "./_CertificateSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCertificatesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CertificateSummaryList: {
      shape: _CertificateSummaryList
    }
  }
};
