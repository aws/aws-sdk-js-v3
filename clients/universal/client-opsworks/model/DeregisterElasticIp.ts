import { DeregisterElasticIpInput } from "./DeregisterElasticIpInput";
import { DeregisterElasticIpOutput } from "./DeregisterElasticIpOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
