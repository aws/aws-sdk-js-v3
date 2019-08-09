import { TranslateTextInput } from "./TranslateTextInput";
import { TranslateTextOutput } from "./TranslateTextOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TextSizeLimitExceededException } from "./TextSizeLimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { UnsupportedLanguagePairException } from "./UnsupportedLanguagePairException";
import { DetectedLanguageLowConfidenceException } from "./DetectedLanguageLowConfidenceException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerException } from "./InternalServerException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
