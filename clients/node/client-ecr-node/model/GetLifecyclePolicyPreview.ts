import { GetLifecyclePolicyPreviewInput } from "./GetLifecyclePolicyPreviewInput";
import { GetLifecyclePolicyPreviewOutput } from "./GetLifecyclePolicyPreviewOutput";
import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { LifecyclePolicyPreviewNotFoundException } from "./LifecyclePolicyPreviewNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
