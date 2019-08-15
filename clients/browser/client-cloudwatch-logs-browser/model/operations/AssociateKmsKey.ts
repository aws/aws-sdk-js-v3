import { AssociateKmsKeyInput } from "../shapes/AssociateKmsKeyInput";
import { AssociateKmsKeyOutput } from "../shapes/AssociateKmsKeyOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationAbortedException } from "../shapes/OperationAbortedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateKmsKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateKmsKey",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateKmsKeyInput
  },
  output: {
    shape: AssociateKmsKeyOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: OperationAbortedException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
