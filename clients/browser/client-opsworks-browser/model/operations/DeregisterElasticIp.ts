import { DeregisterElasticIpInput } from "../shapes/DeregisterElasticIpInput";
import { DeregisterElasticIpOutput } from "../shapes/DeregisterElasticIpOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeregisterElasticIp: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeregisterElasticIp",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeregisterElasticIpInput
  },
  output: {
    shape: DeregisterElasticIpOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
