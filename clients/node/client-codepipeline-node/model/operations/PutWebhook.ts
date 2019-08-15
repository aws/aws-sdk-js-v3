import { PutWebhookInput } from "../shapes/PutWebhookInput";
import { PutWebhookOutput } from "../shapes/PutWebhookOutput";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidWebhookFilterPatternException } from "../shapes/InvalidWebhookFilterPatternException";
import { InvalidWebhookAuthenticationParametersException } from "../shapes/InvalidWebhookAuthenticationParametersException";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { InvalidTagsException } from "../shapes/InvalidTagsException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutWebhook: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutWebhook",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutWebhookInput
  },
  output: {
    shape: PutWebhookOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidWebhookFilterPatternException
    },
    {
      shape: InvalidWebhookAuthenticationParametersException
    },
    {
      shape: PipelineNotFoundException
    },
    {
      shape: TooManyTagsException
    },
    {
      shape: InvalidTagsException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
