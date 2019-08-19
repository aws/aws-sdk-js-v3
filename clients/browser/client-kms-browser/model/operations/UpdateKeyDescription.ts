import { UpdateKeyDescriptionInput } from "../shapes/UpdateKeyDescriptionInput";
import { UpdateKeyDescriptionOutput } from "../shapes/UpdateKeyDescriptionOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateKeyDescription: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateKeyDescription",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateKeyDescriptionInput
  },
  output: {
    shape: UpdateKeyDescriptionOutput
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
    }
  ]
};
