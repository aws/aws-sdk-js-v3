import { UntagResourceInput } from "./UntagResourceInput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { AccessDenied } from "./AccessDenied";
import { InvalidArgument } from "./InvalidArgument";
import { InvalidTagging } from "./InvalidTagging";
import { NoSuchResource } from "./NoSuchResource";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UntagResource2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UntagResource2019_03_26",
  http: {
    method: "POST",
    requestUri: "/2019-03-26/tagging?Operation=Untag"
  },
  input: {
    shape: UntagResourceInput
  },
  output: {
    shape: UntagResourceOutput
  },
  errors: [
    {
      shape: AccessDenied
    },
    {
      shape: InvalidArgument
    },
    {
      shape: InvalidTagging
    },
    {
      shape: NoSuchResource
    }
  ]
};
