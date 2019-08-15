import { ListTaskDefinitionFamiliesInput } from "../shapes/ListTaskDefinitionFamiliesInput";
import { ListTaskDefinitionFamiliesOutput } from "../shapes/ListTaskDefinitionFamiliesOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTaskDefinitionFamilies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTaskDefinitionFamilies",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTaskDefinitionFamiliesInput
  },
  output: {
    shape: ListTaskDefinitionFamiliesOutput
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
