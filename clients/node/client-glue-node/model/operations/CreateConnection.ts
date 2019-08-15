import { CreateConnectionInput } from "../shapes/CreateConnectionInput";
import { CreateConnectionOutput } from "../shapes/CreateConnectionOutput";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "../shapes/ResourceNumberLimitExceededException";
import { GlueEncryptionException } from "../shapes/GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateConnection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateConnection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateConnectionInput
  },
  output: {
    shape: CreateConnectionOutput
  },
  errors: [
    {
      shape: AlreadyExistsException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: ResourceNumberLimitExceededException
    },
    {
      shape: GlueEncryptionException
    }
  ]
};
