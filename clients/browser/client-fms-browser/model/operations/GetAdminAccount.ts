import { GetAdminAccountInput } from "../shapes/GetAdminAccountInput";
import { GetAdminAccountOutput } from "../shapes/GetAdminAccountOutput";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetAdminAccount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAdminAccount",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAdminAccountInput
  },
  output: {
    shape: GetAdminAccountOutput
  },
  errors: [
    {
      shape: InvalidOperationException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalErrorException
    }
  ]
};
