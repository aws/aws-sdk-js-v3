import { _DomainList } from "./_DomainList";
import { _DomainValidationOptionList } from "./_DomainValidationOptionList";
import { _CertificateOptions } from "./_CertificateOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RequestCertificateInput: _Structure_ = {
  type: "structure",
  required: ["DomainName"],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ValidationMethod: {
      shape: {
        type: "string"
      }
    },
    SubjectAlternativeNames: {
      shape: _DomainList
    },
    IdempotencyToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DomainValidationOptions: {
      shape: _DomainValidationOptionList
    },
    Options: {
      shape: _CertificateOptions
    },
    CertificateAuthorityArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
