import { DeleteTagsForDomainInput } from "../shapes/DeleteTagsForDomainInput";
import { DeleteTagsForDomainOutput } from "../shapes/DeleteTagsForDomainOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationLimitExceeded } from "../shapes/OperationLimitExceeded";
import { UnsupportedTLD } from "../shapes/UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteTagsForDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTagsForDomain",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTagsForDomainInput
  },
  output: {
    shape: DeleteTagsForDomainOutput
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
