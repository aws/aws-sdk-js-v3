import { RegisterApplicationRevisionInput } from "../shapes/RegisterApplicationRevisionInput";
import { RegisterApplicationRevisionOutput } from "../shapes/RegisterApplicationRevisionOutput";
import { ApplicationDoesNotExistException } from "../shapes/ApplicationDoesNotExistException";
import { ApplicationNameRequiredException } from "../shapes/ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "../shapes/InvalidApplicationNameException";
import { DescriptionTooLongException } from "../shapes/DescriptionTooLongException";
import { RevisionRequiredException } from "../shapes/RevisionRequiredException";
import { InvalidRevisionException } from "../shapes/InvalidRevisionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RegisterApplicationRevision: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterApplicationRevision",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterApplicationRevisionInput
  },
  output: {
    shape: RegisterApplicationRevisionOutput
  },
  errors: [
    {
      shape: ApplicationDoesNotExistException
    },
    {
      shape: ApplicationNameRequiredException
    },
    {
      shape: InvalidApplicationNameException
    },
    {
      shape: DescriptionTooLongException
    },
    {
      shape: RevisionRequiredException
    },
    {
      shape: InvalidRevisionException
    }
  ]
};
