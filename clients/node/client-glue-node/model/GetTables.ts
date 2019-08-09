import { GetTablesInput } from "./GetTablesInput";
import { GetTablesOutput } from "./GetTablesOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InternalServiceException } from "./InternalServiceException";
import { GlueEncryptionException } from "./GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetTables: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTables",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetTablesInput
  },
  output: {
    shape: GetTablesOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: GlueEncryptionException
    }
  ]
};
