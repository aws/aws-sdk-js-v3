import { RetireGrantInput } from "../shapes/RetireGrantInput";
import { RetireGrantOutput } from "../shapes/RetireGrantOutput";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { InvalidGrantTokenException } from "../shapes/InvalidGrantTokenException";
import { InvalidGrantIdException } from "../shapes/InvalidGrantIdException";
import { NotFoundException } from "../shapes/NotFoundException";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RetireGrant: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RetireGrant",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RetireGrantInput
  },
  output: {
    shape: RetireGrantOutput
  },
  errors: [
    {
      shape: InvalidArnException
    },
    {
      shape: InvalidGrantTokenException
    },
    {
      shape: InvalidGrantIdException
    },
    {
      shape: NotFoundException
    },
    {
      shape: DependencyTimeoutException
    },
    {
      shape: KMSInternalException
    },
    {
      shape: KMSInvalidStateException
    }
  ]
};
