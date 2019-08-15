import { ListTaskDefinitionsInput } from "../shapes/ListTaskDefinitionsInput";
import { ListTaskDefinitionsOutput } from "../shapes/ListTaskDefinitionsOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTaskDefinitions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTaskDefinitions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTaskDefinitionsInput
  },
  output: {
    shape: ListTaskDefinitionsOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: ClientException
    },
    {
      shape: InvalidParameterException
    }
  ]
};
