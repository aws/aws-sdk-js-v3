import { ListDomainNamesInput } from "./ListDomainNamesInput";
import { ListDomainNamesOutput } from "./ListDomainNamesOutput";
import { BaseException } from "./BaseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
