import { GetConnectionsInput } from "./GetConnectionsInput";
import { GetConnectionsOutput } from "./GetConnectionsOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InvalidInputException } from "./InvalidInputException";
import { GlueEncryptionException } from "./GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetConnections: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetConnections",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetConnectionsInput
  },
  output: {
    shape: GetConnectionsOutput
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
