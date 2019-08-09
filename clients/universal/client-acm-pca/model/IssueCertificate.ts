import { IssueCertificateInput } from "./IssueCertificateInput";
import { IssueCertificateOutput } from "./IssueCertificateOutput";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidStateException } from "./InvalidStateException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidArgsException } from "./InvalidArgsException";
import { MalformedCSRException } from "./MalformedCSRException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
