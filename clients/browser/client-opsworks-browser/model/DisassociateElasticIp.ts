import { DisassociateElasticIpInput } from "./DisassociateElasticIpInput";
import { DisassociateElasticIpOutput } from "./DisassociateElasticIpOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisassociateElasticIp: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateElasticIp",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateElasticIpInput
  },
  output: {
    shape: DisassociateElasticIpOutput
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
