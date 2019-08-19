import { GetCertificateAuthorityCsrInput } from "../shapes/GetCertificateAuthorityCsrInput";
import { GetCertificateAuthorityCsrOutput } from "../shapes/GetCertificateAuthorityCsrOutput";
import { RequestInProgressException } from "../shapes/RequestInProgressException";
import { RequestFailedException } from "../shapes/RequestFailedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
