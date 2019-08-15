import { _DomainNameList } from "./_DomainNameList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLoadBalancerTlsCertificateInput: _Structure_ = {
  type: "structure",
  required: ["loadBalancerName", "certificateName", "certificateDomainName"],
  members: {
    loadBalancerName: {
      shape: {
        type: "string"
      }
    },
    certificateName: {
      shape: {
        type: "string"
      }
    },
    certificateDomainName: {
      shape: {
        type: "string"
      }
    },
    certificateAlternativeNames: {
      shape: _DomainNameList
    },
    tags: {
      shape: _TagList
    }
  }
};
