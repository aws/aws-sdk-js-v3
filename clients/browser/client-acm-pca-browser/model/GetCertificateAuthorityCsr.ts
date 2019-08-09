import { GetCertificateAuthorityCsrInput } from "./GetCertificateAuthorityCsrInput";
import { GetCertificateAuthorityCsrOutput } from "./GetCertificateAuthorityCsrOutput";
import { RequestInProgressException } from "./RequestInProgressException";
import { RequestFailedException } from "./RequestFailedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidStateException } from "./InvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetCertificateAuthorityCsr: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCertificateAuthorityCsr",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCertificateAuthorityCsrInput
  },
  output: {
    shape: GetCertificateAuthorityCsrOutput
  },
  errors: [
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
      shape: InvalidStateException
    }
  ]
};
