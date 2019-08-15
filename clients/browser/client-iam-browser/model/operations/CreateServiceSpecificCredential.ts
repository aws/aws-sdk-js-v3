import { CreateServiceSpecificCredentialInput } from "../shapes/CreateServiceSpecificCredentialInput";
import { CreateServiceSpecificCredentialOutput } from "../shapes/CreateServiceSpecificCredentialOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceNotSupportedException } from "../shapes/ServiceNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateServiceSpecificCredential: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateServiceSpecificCredential",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateServiceSpecificCredentialInput
  },
  output: {
    shape: CreateServiceSpecificCredentialOutput,
    resultWrapper: "CreateServiceSpecificCredentialResult"
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceNotSupportedException
    }
  ]
};
