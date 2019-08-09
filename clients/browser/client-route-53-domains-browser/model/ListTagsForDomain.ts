import { ListTagsForDomainInput } from "./ListTagsForDomainInput";
import { ListTagsForDomainOutput } from "./ListTagsForDomainOutput";
import { InvalidInput } from "./InvalidInput";
import { OperationLimitExceeded } from "./OperationLimitExceeded";
import { UnsupportedTLD } from "./UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
