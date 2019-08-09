import { GetCertificateInput } from "./GetCertificateInput";
import { GetCertificateOutput } from "./GetCertificateOutput";
import { RequestInProgressException } from "./RequestInProgressException";
import { RequestFailedException } from "./RequestFailedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidStateException } from "./InvalidStateException";
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
