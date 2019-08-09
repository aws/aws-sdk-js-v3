import { UpdateCertificateOptionsInput } from "./UpdateCertificateOptionsInput";
import { UpdateCertificateOptionsOutput } from "./UpdateCertificateOptionsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidStateException } from "./InvalidStateException";
import { InvalidArnException } from "./InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateCertificateOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateCertificateOptions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateCertificateOptionsInput
  },
  output: {
    shape: UpdateCertificateOptionsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidStateException
    },
    {
      shape: InvalidArnException
    }
  ]
};
