import { List as _List_ } from "@aws-sdk/types";
import { _LoadBalancerTlsCertificateSummary } from "./_LoadBalancerTlsCertificateSummary";

export const _LoadBalancerTlsCertificateSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _LoadBalancerTlsCertificateSummary
  }
};
