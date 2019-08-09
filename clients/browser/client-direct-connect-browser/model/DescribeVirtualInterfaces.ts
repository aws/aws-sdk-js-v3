import { DescribeVirtualInterfacesInput } from "./DescribeVirtualInterfacesInput";
import { DescribeVirtualInterfacesOutput } from "./DescribeVirtualInterfacesOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeVirtualInterfaces: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVirtualInterfaces",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeVirtualInterfacesInput
  },
  output: {
    shape: DescribeVirtualInterfacesOutput
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
