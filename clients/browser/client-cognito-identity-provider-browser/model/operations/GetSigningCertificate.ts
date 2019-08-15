import { GetSigningCertificateInput } from "../shapes/GetSigningCertificateInput";
import { GetSigningCertificateOutput } from "../shapes/GetSigningCertificateOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
