import { GetTableVersionsInput } from "./GetTableVersionsInput";
import { GetTableVersionsOutput } from "./GetTableVersionsOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { GlueEncryptionException } from "./GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
