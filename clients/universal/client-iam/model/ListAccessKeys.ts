import { ListAccessKeysInput } from "./ListAccessKeysInput";
import { ListAccessKeysOutput } from "./ListAccessKeysOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
