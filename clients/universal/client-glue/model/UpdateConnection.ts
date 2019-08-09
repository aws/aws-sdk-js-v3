import { UpdateConnectionInput } from "./UpdateConnectionInput";
import { UpdateConnectionOutput } from "./UpdateConnectionOutput";
import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { GlueEncryptionException } from "./GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
