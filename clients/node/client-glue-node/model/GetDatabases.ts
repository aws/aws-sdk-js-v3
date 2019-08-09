import { GetDatabasesInput } from "./GetDatabasesInput";
import { GetDatabasesOutput } from "./GetDatabasesOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { GlueEncryptionException } from "./GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDatabases: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDatabases",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDatabasesInput
  },
  output: {
    shape: GetDatabasesOutput
  },
  errors: [
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
