import { ImportCertificateAuthorityCertificateInput } from "../shapes/ImportCertificateAuthorityCertificateInput";
import { ImportCertificateAuthorityCertificateOutput } from "../shapes/ImportCertificateAuthorityCertificateOutput";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { RequestInProgressException } from "../shapes/RequestInProgressException";
import { RequestFailedException } from "../shapes/RequestFailedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { MalformedCertificateException } from "../shapes/MalformedCertificateException";
import { CertificateMismatchException } from "../shapes/CertificateMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
