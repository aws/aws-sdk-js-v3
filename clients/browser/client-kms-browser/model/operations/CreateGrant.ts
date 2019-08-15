import { CreateGrantInput } from "../shapes/CreateGrantInput";
import { CreateGrantOutput } from "../shapes/CreateGrantOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { DisabledException } from "../shapes/DisabledException";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { InvalidGrantTokenException } from "../shapes/InvalidGrantTokenException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateGrant: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateGrant",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateGrantInput
  },
  output: {
    shape: CreateGrantOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: DisabledException
    },
    {
      shape: DependencyTimeoutException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: KMSInternalException
    },
    {
      shape: InvalidGrantTokenException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: KMSInvalidStateException
    }
  ]
};
