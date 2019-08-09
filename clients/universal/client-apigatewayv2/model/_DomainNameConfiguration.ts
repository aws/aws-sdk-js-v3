import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DomainNameConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApiGatewayDomainName: {
      shape: {
        type: "string"
      },
      locationName: "apiGatewayDomainName"
    },
    CertificateArn: {
      shape: {
        type: "string"
      },
      locationName: "certificateArn"
    },
    CertificateName: {
      shape: {
        type: "string"
      },
      locationName: "certificateName"
    },
    CertificateUploadDate: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      },
      locationName: "certificateUploadDate"
    },
    EndpointType: {
      shape: {
        type: "string"
      },
      locationName: "endpointType"
    },
    HostedZoneId: {
      shape: {
        type: "string"
      },
      locationName: "hostedZoneId"
    },
    SecurityPolicy: {
      shape: {
        type: "string"
      },
      locationName: "securityPolicy"
    },
    DomainNameStatus: {
      shape: {
        type: "string"
      },
      locationName: "domainNameStatus"
    },
    DomainNameStatusMessage: {
      shape: {
        type: "string"
      },
      locationName: "domainNameStatusMessage"
    }
  }
};
