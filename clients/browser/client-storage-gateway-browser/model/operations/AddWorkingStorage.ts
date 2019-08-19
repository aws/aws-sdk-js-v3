import { AddWorkingStorageInput } from "../shapes/AddWorkingStorageInput";
import { AddWorkingStorageOutput } from "../shapes/AddWorkingStorageOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
