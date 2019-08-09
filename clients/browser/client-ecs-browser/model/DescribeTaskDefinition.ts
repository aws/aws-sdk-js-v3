import { DescribeTaskDefinitionInput } from "./DescribeTaskDefinitionInput";
import { DescribeTaskDefinitionOutput } from "./DescribeTaskDefinitionOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
