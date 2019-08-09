import { StartLifecyclePolicyPreviewInput } from "./StartLifecyclePolicyPreviewInput";
import { StartLifecyclePolicyPreviewOutput } from "./StartLifecyclePolicyPreviewOutput";
import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { LifecyclePolicyNotFoundException } from "./LifecyclePolicyNotFoundException";
import { LifecyclePolicyPreviewInProgressException } from "./LifecyclePolicyPreviewInProgressException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
