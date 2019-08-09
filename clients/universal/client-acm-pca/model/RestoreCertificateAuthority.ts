import { RestoreCertificateAuthorityInput } from "./RestoreCertificateAuthorityInput";
import { RestoreCertificateAuthorityOutput } from "./RestoreCertificateAuthorityOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidStateException } from "./InvalidStateException";
import { InvalidArnException } from "./InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
