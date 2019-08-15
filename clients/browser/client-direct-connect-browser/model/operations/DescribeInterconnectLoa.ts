import { DescribeInterconnectLoaInput } from "../shapes/DescribeInterconnectLoaInput";
import { DescribeInterconnectLoaOutput } from "../shapes/DescribeInterconnectLoaOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
