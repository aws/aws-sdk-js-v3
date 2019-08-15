import { ListServersInput } from "../shapes/ListServersInput";
import { ListServersOutput } from "../shapes/ListServersOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListServers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListServers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListServersInput
  },
  output: {
    shape: ListServersOutput
  },
  errors: [
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
