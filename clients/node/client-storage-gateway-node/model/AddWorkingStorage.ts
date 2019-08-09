import { AddWorkingStorageInput } from "./AddWorkingStorageInput";
import { AddWorkingStorageOutput } from "./AddWorkingStorageOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AddWorkingStorage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddWorkingStorage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddWorkingStorageInput
  },
  output: {
    shape: AddWorkingStorageOutput
  },
  errors: [
    {
      shape: InvalidGatewayRequestException
    },
    {
      shape: InternalServerError
    }
  ]
};
