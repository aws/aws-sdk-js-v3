import { DetectDominantLanguageInput } from "../shapes/DetectDominantLanguageInput";
import { DetectDominantLanguageOutput } from "../shapes/DetectDominantLanguageOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TextSizeLimitExceededException } from "../shapes/TextSizeLimitExceededException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
