import { GetConnectionsInput } from "../shapes/GetConnectionsInput";
import { GetConnectionsOutput } from "../shapes/GetConnectionsOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { GlueEncryptionException } from "../shapes/GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
