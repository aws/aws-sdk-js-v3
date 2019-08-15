import { UntagResourceInput } from "../shapes/UntagResourceInput";
import { UntagResourceOutput } from "../shapes/UntagResourceOutput";
import { AccessDenied } from "../shapes/AccessDenied";
import { InvalidArgument } from "../shapes/InvalidArgument";
import { InvalidTagging } from "../shapes/InvalidTagging";
import { NoSuchResource } from "../shapes/NoSuchResource";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UntagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UntagResource",
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
