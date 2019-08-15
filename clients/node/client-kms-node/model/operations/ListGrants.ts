import { ListGrantsInput } from "../shapes/ListGrantsInput";
import { ListGrantsOutput } from "../shapes/ListGrantsOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { InvalidMarkerException } from "../shapes/InvalidMarkerException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListGrants: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListGrants",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListGrantsInput
  },
  output: {
    shape: ListGrantsOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: DependencyTimeoutException
    },
    {
      shape: InvalidMarkerException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: KMSInternalException
    },
    {
      shape: KMSInvalidStateException
    }
  ]
};
