import { GetCertificateInput } from "./GetCertificateInput";
import { GetCertificateOutput } from "./GetCertificateOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { RequestInProgressException } from "./RequestInProgressException";
import { InvalidArnException } from "./InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
