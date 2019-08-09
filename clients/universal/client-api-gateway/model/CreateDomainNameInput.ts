import { _EndpointConfiguration } from "./_EndpointConfiguration";
import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDomainNameInput: _Structure_ = {
  type: "structure",
  required: ["domainName"],
  members: {
    domainName: {
      shape: {
        type: "string"
      }
    },
    certificateName: {
      shape: {
        type: "string"
      }
    },
    certificateBody: {
      shape: {
        type: "string"
      }
    },
    certificatePrivateKey: {
      shape: {
        type: "string"
      }
    },
    certificateChain: {
      shape: {
        type: "string"
      }
    },
    certificateArn: {
      shape: {
        type: "string"
      }
    },
    regionalCertificateName: {
      shape: {
        type: "string"
      }
    },
    regionalCertificateArn: {
      shape: {
        type: "string"
      }
    },
    endpointConfiguration: {
      shape: _EndpointConfiguration
    },
    tags: {
      shape: _MapOfStringToString
    },
    securityPolicy: {
      shape: {
        type: "string"
      }
    }
  }
};
