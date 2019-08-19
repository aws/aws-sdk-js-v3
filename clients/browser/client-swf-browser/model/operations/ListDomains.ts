import { ListDomainsInput } from "../shapes/ListDomainsInput";
import { ListDomainsOutput } from "../shapes/ListDomainsOutput";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDomains: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDomains",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDomainsInput
  },
  output: {
    shape: ListDomainsOutput
  },
  errors: [
    {
      shape: OperationNotPermittedFault
    }
  ]
};
