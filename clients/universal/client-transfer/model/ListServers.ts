import { ListServersInput } from "./ListServersInput";
import { ListServersOutput } from "./ListServersOutput";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
