import { GetCertificateInput } from "../shapes/GetCertificateInput";
import { GetCertificateOutput } from "../shapes/GetCertificateOutput";
import { RequestInProgressException } from "../shapes/RequestInProgressException";
import { RequestFailedException } from "../shapes/RequestFailedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { InvalidStateException } from "../shapes/InvalidStateException";
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
