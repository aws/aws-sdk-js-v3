import { RevokeGrantInput } from "../shapes/RevokeGrantInput";
import { RevokeGrantOutput } from "../shapes/RevokeGrantOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { InvalidGrantIdException } from "../shapes/InvalidGrantIdException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RevokeGrant: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RevokeGrant",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RevokeGrantInput
  },
  output: {
    shape: RevokeGrantOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: DependencyTimeoutException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: InvalidGrantIdException
    },
    {
      shape: KMSInternalException
    },
    {
      shape: KMSInvalidStateException
    }
  ]
};
