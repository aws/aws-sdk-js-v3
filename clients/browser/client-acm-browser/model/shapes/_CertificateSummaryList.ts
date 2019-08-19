import { List as _List_ } from "@aws-sdk/types";
import { _CertificateSummary } from "./_CertificateSummary";

export const _CertificateSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _CertificateSummary
  }
};
