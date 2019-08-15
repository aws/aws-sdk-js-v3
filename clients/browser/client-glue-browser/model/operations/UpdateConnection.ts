import { UpdateConnectionInput } from "../shapes/UpdateConnectionInput";
import { UpdateConnectionOutput } from "../shapes/UpdateConnectionOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { GlueEncryptionException } from "../shapes/GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateConnection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateConnection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateConnectionInput
  },
  output: {
    shape: UpdateConnectionOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: EntityNotFoundException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: GlueEncryptionException
    }
  ]
};
