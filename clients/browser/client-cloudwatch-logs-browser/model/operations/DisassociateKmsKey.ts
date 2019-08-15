import { DisassociateKmsKeyInput } from "../shapes/DisassociateKmsKeyInput";
import { DisassociateKmsKeyOutput } from "../shapes/DisassociateKmsKeyOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationAbortedException } from "../shapes/OperationAbortedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateKmsKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateKmsKey",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateKmsKeyInput
  },
  output: {
    shape: DisassociateKmsKeyOutput
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
