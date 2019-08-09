import { List as _List_ } from "@aws-sdk/types";
import { _LoadBalancerTlsCertificate } from "./_LoadBalancerTlsCertificate";

export const _LoadBalancerTlsCertificateList: _List_ = {
  type: "list",
  member: {
    shape: _LoadBalancerTlsCertificate
  }
};
