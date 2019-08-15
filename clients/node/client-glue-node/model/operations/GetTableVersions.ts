import { GetTableVersionsInput } from "../shapes/GetTableVersionsInput";
import { GetTableVersionsOutput } from "../shapes/GetTableVersionsOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { GlueEncryptionException } from "../shapes/GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetTableVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTableVersions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetTableVersionsInput
  },
  output: {
    shape: GetTableVersionsOutput
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
