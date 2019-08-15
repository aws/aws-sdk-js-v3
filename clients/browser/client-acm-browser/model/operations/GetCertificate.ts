import { GetCertificateInput } from "../shapes/GetCertificateInput";
import { GetCertificateOutput } from "../shapes/GetCertificateOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { RequestInProgressException } from "../shapes/RequestInProgressException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCertificateInput
  },
  output: {
    shape: GetCertificateOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: RequestInProgressException
    },
    {
      shape: InvalidArnException
    }
  ]
};
