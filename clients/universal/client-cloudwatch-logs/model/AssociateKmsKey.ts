import { AssociateKmsKeyInput } from "./AssociateKmsKeyInput";
import { AssociateKmsKeyOutput } from "./AssociateKmsKeyOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationAbortedException } from "./OperationAbortedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
