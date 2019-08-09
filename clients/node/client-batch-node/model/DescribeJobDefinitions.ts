import { DescribeJobDefinitionsInput } from "./DescribeJobDefinitionsInput";
import { DescribeJobDefinitionsOutput } from "./DescribeJobDefinitionsOutput";
import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeJobDefinitions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeJobDefinitions",
  http: {
    method: "POST",
    requestUri: "/v1/describejobdefinitions"
  },
  input: {
    shape: DescribeJobDefinitionsInput
  },
  output: {
    shape: DescribeJobDefinitionsOutput
  },
  errors: [
    {
      shape: ClientException
    },
    {
      shape: ServerException
    }
  ]
};
