import { _LoadBalancerTlsCertificateDomainValidationOptionList } from "./_LoadBalancerTlsCertificateDomainValidationOptionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoadBalancerTlsCertificateRenewalSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    renewalStatus: {
      shape: {
        type: "string"
      }
    },
    domainValidationOptions: {
      shape: _LoadBalancerTlsCertificateDomainValidationOptionList
    }
  }
};
