import { _EndpointConfiguration } from "./_EndpointConfiguration";
import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDomainNameOutput: _Structure_ = {
  type: "structure",
  required: [],
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
    certificateArn: {
      shape: {
        type: "string"
      }
    },
    certificateUploadDate: {
      shape: {
        type: "timestamp"
      }
    },
    regionalDomainName: {
      shape: {
        type: "string"
      }
    },
    regionalHostedZoneId: {
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
    distributionDomainName: {
      shape: {
        type: "string"
      }
    },
    distributionHostedZoneId: {
      shape: {
        type: "string"
      }
    },
    endpointConfiguration: {
      shape: _EndpointConfiguration
    },
    domainNameStatus: {
      shape: {
        type: "string"
      }
    },
    domainNameStatusMessage: {
      shape: {
        type: "string"
      }
    },
    securityPolicy: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _MapOfStringToString
    }
  }
};
