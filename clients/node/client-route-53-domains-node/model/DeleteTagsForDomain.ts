import { DeleteTagsForDomainInput } from "./DeleteTagsForDomainInput";
import { DeleteTagsForDomainOutput } from "./DeleteTagsForDomainOutput";
import { InvalidInput } from "./InvalidInput";
import { OperationLimitExceeded } from "./OperationLimitExceeded";
import { UnsupportedTLD } from "./UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
