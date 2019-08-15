import { IssueCertificateInput } from "../shapes/IssueCertificateInput";
import { IssueCertificateOutput } from "../shapes/IssueCertificateOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { InvalidArgsException } from "../shapes/InvalidArgsException";
import { MalformedCSRException } from "../shapes/MalformedCSRException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const IssueCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "IssueCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: IssueCertificateInput
  },
  output: {
    shape: IssueCertificateOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidStateException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: InvalidArgsException
    },
    {
      shape: MalformedCSRException
    }
  ]
};
