import { ListAccessKeysInput } from "../shapes/ListAccessKeysInput";
import { ListAccessKeysOutput } from "../shapes/ListAccessKeysOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAccessKeys: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAccessKeys",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAccessKeysInput
  },
  output: {
    shape: ListAccessKeysOutput,
    resultWrapper: "ListAccessKeysResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
