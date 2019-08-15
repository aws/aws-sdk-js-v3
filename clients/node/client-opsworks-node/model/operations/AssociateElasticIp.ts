import { AssociateElasticIpInput } from "../shapes/AssociateElasticIpInput";
import { AssociateElasticIpOutput } from "../shapes/AssociateElasticIpOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateElasticIp: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateElasticIp",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateElasticIpInput
  },
  output: {
    shape: AssociateElasticIpOutput
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
