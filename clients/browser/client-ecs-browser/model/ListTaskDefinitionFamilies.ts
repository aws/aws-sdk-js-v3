import { ListTaskDefinitionFamiliesInput } from "./ListTaskDefinitionFamiliesInput";
import { ListTaskDefinitionFamiliesOutput } from "./ListTaskDefinitionFamiliesOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
