import { DisassociateKmsKeyInput } from "./DisassociateKmsKeyInput";
import { DisassociateKmsKeyOutput } from "./DisassociateKmsKeyOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationAbortedException } from "./OperationAbortedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
