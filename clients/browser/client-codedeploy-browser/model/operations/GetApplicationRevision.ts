import { GetApplicationRevisionInput } from "../shapes/GetApplicationRevisionInput";
import { GetApplicationRevisionOutput } from "../shapes/GetApplicationRevisionOutput";
import { ApplicationDoesNotExistException } from "../shapes/ApplicationDoesNotExistException";
import { ApplicationNameRequiredException } from "../shapes/ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "../shapes/InvalidApplicationNameException";
import { RevisionDoesNotExistException } from "../shapes/RevisionDoesNotExistException";
import { RevisionRequiredException } from "../shapes/RevisionRequiredException";
import { InvalidRevisionException } from "../shapes/InvalidRevisionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetApplicationRevision: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetApplicationRevision",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetApplicationRevisionInput
  },
  output: {
    shape: GetApplicationRevisionOutput
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
      shape: RevisionDoesNotExistException
    },
    {
      shape: RevisionRequiredException
    },
    {
      shape: InvalidRevisionException
    }
  ]
};
