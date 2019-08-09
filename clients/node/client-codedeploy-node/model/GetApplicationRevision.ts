import { GetApplicationRevisionInput } from "./GetApplicationRevisionInput";
import { GetApplicationRevisionOutput } from "./GetApplicationRevisionOutput";
import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { RevisionDoesNotExistException } from "./RevisionDoesNotExistException";
import { RevisionRequiredException } from "./RevisionRequiredException";
import { InvalidRevisionException } from "./InvalidRevisionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
