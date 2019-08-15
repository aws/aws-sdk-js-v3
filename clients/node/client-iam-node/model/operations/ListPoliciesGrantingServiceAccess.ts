import { ListPoliciesGrantingServiceAccessInput } from "../shapes/ListPoliciesGrantingServiceAccessInput";
import { ListPoliciesGrantingServiceAccessOutput } from "../shapes/ListPoliciesGrantingServiceAccessOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPoliciesGrantingServiceAccess: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPoliciesGrantingServiceAccess",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListPoliciesGrantingServiceAccessInput
  },
  output: {
    shape: ListPoliciesGrantingServiceAccessOutput,
    resultWrapper: "ListPoliciesGrantingServiceAccessResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: InvalidInputException
    }
  ]
};
