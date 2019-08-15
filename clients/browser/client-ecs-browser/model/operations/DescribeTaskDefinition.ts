import { DescribeTaskDefinitionInput } from "../shapes/DescribeTaskDefinitionInput";
import { DescribeTaskDefinitionOutput } from "../shapes/DescribeTaskDefinitionOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTaskDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTaskDefinition",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTaskDefinitionInput
  },
  output: {
    shape: DescribeTaskDefinitionOutput
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
