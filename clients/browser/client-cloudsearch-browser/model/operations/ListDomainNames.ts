import { ListDomainNamesInput } from "../shapes/ListDomainNamesInput";
import { ListDomainNamesOutput } from "../shapes/ListDomainNamesOutput";
import { BaseException } from "../shapes/BaseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDomainNames: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDomainNames",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDomainNamesInput
  },
  output: {
    shape: ListDomainNamesOutput,
    resultWrapper: "ListDomainNamesResult"
  },
  errors: [
    {
      shape: BaseException
    }
  ]
};
