import { ListAccountAliasesInput } from "../shapes/ListAccountAliasesInput";
import { ListAccountAliasesOutput } from "../shapes/ListAccountAliasesOutput";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAccountAliases: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAccountAliases",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAccountAliasesInput
  },
  output: {
    shape: ListAccountAliasesOutput,
    resultWrapper: "ListAccountAliasesResult"
  },
  errors: [
    {
      shape: ServiceFailureException
    }
  ]
};
