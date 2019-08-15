import { UpdateTagsForDomainInput } from "../shapes/UpdateTagsForDomainInput";
import { UpdateTagsForDomainOutput } from "../shapes/UpdateTagsForDomainOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationLimitExceeded } from "../shapes/OperationLimitExceeded";
import { UnsupportedTLD } from "../shapes/UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateTagsForDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateTagsForDomain",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateTagsForDomainInput
  },
  output: {
    shape: UpdateTagsForDomainOutput
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
