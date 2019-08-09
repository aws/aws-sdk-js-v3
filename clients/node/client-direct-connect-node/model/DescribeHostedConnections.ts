import { DescribeHostedConnectionsInput } from "./DescribeHostedConnectionsInput";
import { DescribeHostedConnectionsOutput } from "./DescribeHostedConnectionsOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeHostedConnections: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeHostedConnections",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeHostedConnectionsInput
  },
  output: {
    shape: DescribeHostedConnectionsOutput
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
