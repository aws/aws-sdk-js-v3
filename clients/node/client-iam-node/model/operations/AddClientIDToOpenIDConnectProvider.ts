import { AddClientIDToOpenIDConnectProviderInput } from "../shapes/AddClientIDToOpenIDConnectProviderInput";
import { AddClientIDToOpenIDConnectProviderOutput } from "../shapes/AddClientIDToOpenIDConnectProviderOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
