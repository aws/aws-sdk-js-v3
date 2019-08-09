import { RegisterElasticIpInput } from "./RegisterElasticIpInput";
import { RegisterElasticIpOutput } from "./RegisterElasticIpOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
