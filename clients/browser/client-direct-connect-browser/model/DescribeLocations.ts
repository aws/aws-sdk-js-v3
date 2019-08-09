import { DescribeLocationsInput } from "./DescribeLocationsInput";
import { DescribeLocationsOutput } from "./DescribeLocationsOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeLocations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLocations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLocationsInput
  },
  output: {
    shape: DescribeLocationsOutput
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
