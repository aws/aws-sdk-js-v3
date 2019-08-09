import { DetectDominantLanguageInput } from "./DetectDominantLanguageInput";
import { DetectDominantLanguageOutput } from "./DetectDominantLanguageOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TextSizeLimitExceededException } from "./TextSizeLimitExceededException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DetectDominantLanguage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetectDominantLanguage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetectDominantLanguageInput
  },
  output: {
    shape: DetectDominantLanguageOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: TextSizeLimitExceededException
    },
    {
      shape: InternalServerException
    }
  ]
};
