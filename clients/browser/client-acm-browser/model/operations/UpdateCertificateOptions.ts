import { UpdateCertificateOptionsInput } from "../shapes/UpdateCertificateOptionsInput";
import { UpdateCertificateOptionsOutput } from "../shapes/UpdateCertificateOptionsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
