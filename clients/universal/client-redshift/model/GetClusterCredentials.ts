import { GetClusterCredentialsInput } from "./GetClusterCredentialsInput";
import { GetClusterCredentialsOutput } from "./GetClusterCredentialsOutput";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { UnsupportedOperationFault } from "./UnsupportedOperationFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
