import { ListTagsForDomainInput } from "../shapes/ListTagsForDomainInput";
import { ListTagsForDomainOutput } from "../shapes/ListTagsForDomainOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationLimitExceeded } from "../shapes/OperationLimitExceeded";
import { UnsupportedTLD } from "../shapes/UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTagsForDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTagsForDomain",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTagsForDomainInput
  },
  output: {
    shape: ListTagsForDomainOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: OperationLimitExceeded
    },
    {
      shape: UnsupportedTLD
    }
  ]
};
