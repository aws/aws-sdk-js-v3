import { GetProtectionStatusInput } from "../shapes/GetProtectionStatusInput";
import { GetProtectionStatusOutput } from "../shapes/GetProtectionStatusOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
