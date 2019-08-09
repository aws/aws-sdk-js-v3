import { GetConnectionInput } from "./GetConnectionInput";
import { GetConnectionOutput } from "./GetConnectionOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InvalidInputException } from "./InvalidInputException";
import { GlueEncryptionException } from "./GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetConnection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetConnection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetConnectionInput
  },
  output: {
    shape: GetConnectionOutput
  },
  errors: [
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
