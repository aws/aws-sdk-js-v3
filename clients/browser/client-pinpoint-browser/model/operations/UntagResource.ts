import { UntagResourceInput } from "../shapes/UntagResourceInput";
import { UntagResourceOutput } from "../shapes/UntagResourceOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UntagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UntagResource",
  http: {
    method: "DELETE",
    requestUri: "/v1/tags/{resource-arn}"
  },
  input: {
    shape: UntagResourceInput
  },
  output: {
    shape: UntagResourceOutput
  },
  errors: []
};
