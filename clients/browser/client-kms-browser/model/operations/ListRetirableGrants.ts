import { ListRetirableGrantsInput } from "../shapes/ListRetirableGrantsInput";
import { ListRetirableGrantsOutput } from "../shapes/ListRetirableGrantsOutput";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { InvalidMarkerException } from "../shapes/InvalidMarkerException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { NotFoundException } from "../shapes/NotFoundException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListRetirableGrants: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRetirableGrants",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListRetirableGrantsInput
  },
  output: {
    shape: ListRetirableGrantsOutput
  },
  errors: [
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
      shape: NotFoundException
    },
    {
      shape: KMSInternalException
    }
  ]
};
