import { CreateConnectionInput } from "./CreateConnectionInput";
import { CreateConnectionOutput } from "./CreateConnectionOutput";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { GlueEncryptionException } from "./GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
