import { GetLifecyclePolicyPreviewInput } from "../shapes/GetLifecyclePolicyPreviewInput";
import { GetLifecyclePolicyPreviewOutput } from "../shapes/GetLifecyclePolicyPreviewOutput";
import { ServerException } from "../shapes/ServerException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { LifecyclePolicyPreviewNotFoundException } from "../shapes/LifecyclePolicyPreviewNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetLifecyclePolicyPreview: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetLifecyclePolicyPreview",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetLifecyclePolicyPreviewInput
  },
  output: {
    shape: GetLifecyclePolicyPreviewOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: RepositoryNotFoundException
    },
    {
      shape: LifecyclePolicyPreviewNotFoundException
    }
  ]
};
