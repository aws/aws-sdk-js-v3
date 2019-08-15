import { CreateClusterInput } from "../shapes/CreateClusterInput";
import { CreateClusterOutput } from "../shapes/CreateClusterOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceLimitExceededException } from "../shapes/ResourceLimitExceededException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClientException } from "../shapes/ClientException";
import { ServerException } from "../shapes/ServerException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { UnsupportedAvailabilityZoneException } from "../shapes/UnsupportedAvailabilityZoneException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
