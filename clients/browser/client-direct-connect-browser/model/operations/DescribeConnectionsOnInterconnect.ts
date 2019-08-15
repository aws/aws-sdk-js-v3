import { DescribeConnectionsOnInterconnectInput } from "../shapes/DescribeConnectionsOnInterconnectInput";
import { DescribeConnectionsOnInterconnectOutput } from "../shapes/DescribeConnectionsOnInterconnectOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeConnectionsOnInterconnect: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeConnectionsOnInterconnect",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeConnectionsOnInterconnectInput
  },
  output: {
    shape: DescribeConnectionsOnInterconnectOutput
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
