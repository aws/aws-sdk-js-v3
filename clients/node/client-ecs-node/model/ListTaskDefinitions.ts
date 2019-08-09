import { ListTaskDefinitionsInput } from "./ListTaskDefinitionsInput";
import { ListTaskDefinitionsOutput } from "./ListTaskDefinitionsOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
