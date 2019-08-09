import { DescribeClustersInput } from "./DescribeClustersInput";
import { DescribeClustersOutput } from "./DescribeClustersOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
