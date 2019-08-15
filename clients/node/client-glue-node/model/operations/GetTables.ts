import { GetTablesInput } from "../shapes/GetTablesInput";
import { GetTablesOutput } from "../shapes/GetTablesOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { GlueEncryptionException } from "../shapes/GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
