import { RegisterElasticIpInput } from "../shapes/RegisterElasticIpInput";
import { RegisterElasticIpOutput } from "../shapes/RegisterElasticIpOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RegisterElasticIp: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterElasticIp",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterElasticIpInput
  },
  output: {
    shape: RegisterElasticIpOutput
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
