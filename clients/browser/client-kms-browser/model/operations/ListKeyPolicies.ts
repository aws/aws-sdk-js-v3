import { ListKeyPoliciesInput } from "../shapes/ListKeyPoliciesInput";
import { ListKeyPoliciesOutput } from "../shapes/ListKeyPoliciesOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListKeyPolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListKeyPolicies",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListKeyPoliciesInput
  },
  output: {
    shape: ListKeyPoliciesOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: DependencyTimeoutException
    },
    {
      shape: KMSInternalException
    },
    {
      shape: KMSInvalidStateException
    }
  ]
};
