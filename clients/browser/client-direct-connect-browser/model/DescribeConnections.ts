import { DescribeConnectionsInput } from "./DescribeConnectionsInput";
import { DescribeConnectionsOutput } from "./DescribeConnectionsOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeConnections: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeConnections",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeConnectionsInput
  },
  output: {
    shape: DescribeConnectionsOutput
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
