import { GetSigningCertificateInput } from "./GetSigningCertificateInput";
import { GetSigningCertificateOutput } from "./GetSigningCertificateOutput";
import { InternalErrorException } from "./InternalErrorException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSigningCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSigningCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSigningCertificateInput
  },
  output: {
    shape: GetSigningCertificateOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
