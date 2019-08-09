import { PutWebhookInput } from "./PutWebhookInput";
import { PutWebhookOutput } from "./PutWebhookOutput";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidWebhookFilterPatternException } from "./InvalidWebhookFilterPatternException";
import { InvalidWebhookAuthenticationParametersException } from "./InvalidWebhookAuthenticationParametersException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { TooManyTagsException } from "./TooManyTagsException";
import { InvalidTagsException } from "./InvalidTagsException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
