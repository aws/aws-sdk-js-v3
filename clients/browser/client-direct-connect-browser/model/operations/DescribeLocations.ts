import { DescribeLocationsInput } from "../shapes/DescribeLocationsInput";
import { DescribeLocationsOutput } from "../shapes/DescribeLocationsOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
