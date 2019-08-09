import { DescribeInterconnectLoaInput } from "./DescribeInterconnectLoaInput";
import { DescribeInterconnectLoaOutput } from "./DescribeInterconnectLoaOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeInterconnectLoa: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeInterconnectLoa",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeInterconnectLoaInput
  },
  output: {
    shape: DescribeInterconnectLoaOutput
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
