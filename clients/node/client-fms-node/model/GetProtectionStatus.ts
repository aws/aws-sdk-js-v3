import { GetProtectionStatusInput } from "./GetProtectionStatusInput";
import { GetProtectionStatusOutput } from "./GetProtectionStatusOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetProtectionStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetProtectionStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetProtectionStatusInput
  },
  output: {
    shape: GetProtectionStatusOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalErrorException
    }
  ]
};
