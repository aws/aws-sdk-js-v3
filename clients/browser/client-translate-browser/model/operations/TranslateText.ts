import { TranslateTextInput } from "../shapes/TranslateTextInput";
import { TranslateTextOutput } from "../shapes/TranslateTextOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TextSizeLimitExceededException } from "../shapes/TextSizeLimitExceededException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { UnsupportedLanguagePairException } from "../shapes/UnsupportedLanguagePairException";
import { DetectedLanguageLowConfidenceException } from "../shapes/DetectedLanguageLowConfidenceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TranslateText: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TranslateText",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TranslateTextInput
  },
  output: {
    shape: TranslateTextOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: TextSizeLimitExceededException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: UnsupportedLanguagePairException
    },
    {
      shape: DetectedLanguageLowConfidenceException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServerException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
