import { ImportCertificateAuthorityCertificateInput } from "./ImportCertificateAuthorityCertificateInput";
import { ImportCertificateAuthorityCertificateOutput } from "./ImportCertificateAuthorityCertificateOutput";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { RequestInProgressException } from "./RequestInProgressException";
import { RequestFailedException } from "./RequestFailedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidStateException } from "./InvalidStateException";
import { MalformedCertificateException } from "./MalformedCertificateException";
import { CertificateMismatchException } from "./CertificateMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ImportCertificateAuthorityCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ImportCertificateAuthorityCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ImportCertificateAuthorityCertificateInput
  },
  output: {
    shape: ImportCertificateAuthorityCertificateOutput
  },
  errors: [
    {
      shape: ConcurrentModificationException
    },
    {
      shape: RequestInProgressException
    },
    {
      shape: RequestFailedException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: InvalidStateException
    },
    {
      shape: MalformedCertificateException
    },
    {
      shape: CertificateMismatchException
    }
  ]
};
