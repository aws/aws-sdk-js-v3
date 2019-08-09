import { ListPoliciesGrantingServiceAccessInput } from "./ListPoliciesGrantingServiceAccessInput";
import { ListPoliciesGrantingServiceAccessOutput } from "./ListPoliciesGrantingServiceAccessOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
