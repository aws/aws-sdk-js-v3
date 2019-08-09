import { CreateClusterInput } from "./CreateClusterInput";
import { CreateClusterOutput } from "./CreateClusterOutput";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnsupportedAvailabilityZoneException } from "./UnsupportedAvailabilityZoneException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCluster",
  http: {
    method: "POST",
    requestUri: "/clusters"
  },
  input: {
    shape: CreateClusterInput
  },
  output: {
    shape: CreateClusterOutput
  },
  errors: [
    {
      shape: ResourceInUseException
    },
    {
      shape: ResourceLimitExceededException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ClientException
    },
    {
      shape: ServerException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: UnsupportedAvailabilityZoneException
    }
  ]
};
