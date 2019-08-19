import { GetClusterCredentialsInput } from "../shapes/GetClusterCredentialsInput";
import { GetClusterCredentialsOutput } from "../shapes/GetClusterCredentialsOutput";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { UnsupportedOperationFault } from "../shapes/UnsupportedOperationFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetClusterCredentials: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetClusterCredentials",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetClusterCredentialsInput
  },
  output: {
    shape: GetClusterCredentialsOutput,
    resultWrapper: "GetClusterCredentialsResult"
  },
  errors: [
    {
      shape: ClusterNotFoundFault
    },
    {
      shape: UnsupportedOperationFault
    }
  ]
};
