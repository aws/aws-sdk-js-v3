import { GetAdminAccountInput } from "./GetAdminAccountInput";
import { GetAdminAccountOutput } from "./GetAdminAccountOutput";
import { InvalidOperationException } from "./InvalidOperationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
