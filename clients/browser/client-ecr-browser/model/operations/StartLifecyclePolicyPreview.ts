import { StartLifecyclePolicyPreviewInput } from "../shapes/StartLifecyclePolicyPreviewInput";
import { StartLifecyclePolicyPreviewOutput } from "../shapes/StartLifecyclePolicyPreviewOutput";
import { ServerException } from "../shapes/ServerException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { LifecyclePolicyNotFoundException } from "../shapes/LifecyclePolicyNotFoundException";
import { LifecyclePolicyPreviewInProgressException } from "../shapes/LifecyclePolicyPreviewInProgressException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartLifecyclePolicyPreview: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartLifecyclePolicyPreview",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartLifecyclePolicyPreviewInput
  },
  output: {
    shape: StartLifecyclePolicyPreviewOutput
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
      shape: LifecyclePolicyNotFoundException
    },
    {
      shape: LifecyclePolicyPreviewInProgressException
    }
  ]
};
