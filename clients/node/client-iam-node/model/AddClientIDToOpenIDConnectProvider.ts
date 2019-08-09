import { AddClientIDToOpenIDConnectProviderInput } from "./AddClientIDToOpenIDConnectProviderInput";
import { AddClientIDToOpenIDConnectProviderOutput } from "./AddClientIDToOpenIDConnectProviderOutput";
import { InvalidInputException } from "./InvalidInputException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AddClientIDToOpenIDConnectProvider: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddClientIDToOpenIDConnectProvider",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddClientIDToOpenIDConnectProviderInput
  },
  output: {
    shape: AddClientIDToOpenIDConnectProviderOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: NoSuchEntityException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
