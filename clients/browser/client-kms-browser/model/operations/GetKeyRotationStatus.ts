import { GetKeyRotationStatusInput } from "../shapes/GetKeyRotationStatusInput";
import { GetKeyRotationStatusOutput } from "../shapes/GetKeyRotationStatusOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetKeyRotationStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetKeyRotationStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetKeyRotationStatusInput
  },
  output: {
    shape: GetKeyRotationStatusOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: DependencyTimeoutException
    },
    {
      shape: KMSInternalException
    },
    {
      shape: KMSInvalidStateException
    },
    {
      shape: UnsupportedOperationException
    }
  ]
};
