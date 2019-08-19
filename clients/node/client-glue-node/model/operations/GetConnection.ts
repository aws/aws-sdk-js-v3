import { GetConnectionInput } from "../shapes/GetConnectionInput";
import { GetConnectionOutput } from "../shapes/GetConnectionOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { GlueEncryptionException } from "../shapes/GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
