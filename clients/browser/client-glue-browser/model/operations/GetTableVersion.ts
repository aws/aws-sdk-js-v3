import { GetTableVersionInput } from "../shapes/GetTableVersionInput";
import { GetTableVersionOutput } from "../shapes/GetTableVersionOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { GlueEncryptionException } from "../shapes/GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
