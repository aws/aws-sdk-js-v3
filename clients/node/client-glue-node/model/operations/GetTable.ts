import { GetTableInput } from "../shapes/GetTableInput";
import { GetTableOutput } from "../shapes/GetTableOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { GlueEncryptionException } from "../shapes/GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetTable: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTable",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetTableInput
  },
  output: {
    shape: GetTableOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: GlueEncryptionException
    }
  ]
};
