import { GetCertificateAuthorityCertificateInput } from "./GetCertificateAuthorityCertificateInput";
import { GetCertificateAuthorityCertificateOutput } from "./GetCertificateAuthorityCertificateOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidStateException } from "./InvalidStateException";
import { InvalidArnException } from "./InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetCertificateAuthorityCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCertificateAuthorityCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCertificateAuthorityCertificateInput
  },
  output: {
    shape: GetCertificateAuthorityCertificateOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidStateException
    },
    {
      shape: InvalidArnException
    }
  ]
};
