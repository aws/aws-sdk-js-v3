import { DescribeInterconnectsInput } from "./DescribeInterconnectsInput";
import { DescribeInterconnectsOutput } from "./DescribeInterconnectsOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeInterconnects: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeInterconnects",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeInterconnectsInput
  },
  output: {
    shape: DescribeInterconnectsOutput
  },
  errors: [
    {
      shape: DirectConnectServerException
    },
    {
      shape: DirectConnectClientException
    }
  ]
};
