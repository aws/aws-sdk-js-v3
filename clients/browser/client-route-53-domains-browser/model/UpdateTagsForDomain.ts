import { UpdateTagsForDomainInput } from "./UpdateTagsForDomainInput";
import { UpdateTagsForDomainOutput } from "./UpdateTagsForDomainOutput";
import { InvalidInput } from "./InvalidInput";
import { OperationLimitExceeded } from "./OperationLimitExceeded";
import { UnsupportedTLD } from "./UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
