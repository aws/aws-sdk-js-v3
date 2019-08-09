import { GetTableInput } from "./GetTableInput";
import { GetTableOutput } from "./GetTableOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { GlueEncryptionException } from "./GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
