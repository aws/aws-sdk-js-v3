import { UpdateElasticIpInput } from "../shapes/UpdateElasticIpInput";
import { UpdateElasticIpOutput } from "../shapes/UpdateElasticIpOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateElasticIp: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateElasticIp",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateElasticIpInput
  },
  output: {
    shape: UpdateElasticIpOutput
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
