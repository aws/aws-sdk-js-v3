import { DescribeClustersInput } from "../shapes/DescribeClustersInput";
import { DescribeClustersOutput } from "../shapes/DescribeClustersOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeClusters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeClusters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeClustersInput
  },
  output: {
    shape: DescribeClustersOutput
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
