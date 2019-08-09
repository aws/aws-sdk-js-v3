import { CreateServiceSpecificCredentialInput } from "./CreateServiceSpecificCredentialInput";
import { CreateServiceSpecificCredentialOutput } from "./CreateServiceSpecificCredentialOutput";
import { LimitExceededException } from "./LimitExceededException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceNotSupportedException } from "./ServiceNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
