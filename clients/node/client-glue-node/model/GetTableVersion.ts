import { GetTableVersionInput } from "./GetTableVersionInput";
import { GetTableVersionOutput } from "./GetTableVersionOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { GlueEncryptionException } from "./GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetTableVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTableVersion",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetTableVersionInput
  },
  output: {
    shape: GetTableVersionOutput
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
