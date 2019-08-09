import { RegisterApplicationRevisionInput } from "./RegisterApplicationRevisionInput";
import { RegisterApplicationRevisionOutput } from "./RegisterApplicationRevisionOutput";
import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { DescriptionTooLongException } from "./DescriptionTooLongException";
import { RevisionRequiredException } from "./RevisionRequiredException";
import { InvalidRevisionException } from "./InvalidRevisionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
