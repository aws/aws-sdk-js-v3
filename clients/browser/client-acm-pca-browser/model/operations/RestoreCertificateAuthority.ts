import { RestoreCertificateAuthorityInput } from "../shapes/RestoreCertificateAuthorityInput";
import { RestoreCertificateAuthorityOutput } from "../shapes/RestoreCertificateAuthorityOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RestoreCertificateAuthority: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RestoreCertificateAuthority",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RestoreCertificateAuthorityInput
  },
  output: {
    shape: RestoreCertificateAuthorityOutput
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
