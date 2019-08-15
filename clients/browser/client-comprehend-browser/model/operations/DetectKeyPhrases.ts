import { DetectKeyPhrasesInput } from "../shapes/DetectKeyPhrasesInput";
import { DetectKeyPhrasesOutput } from "../shapes/DetectKeyPhrasesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TextSizeLimitExceededException } from "../shapes/TextSizeLimitExceededException";
import { UnsupportedLanguageException } from "../shapes/UnsupportedLanguageException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DetectKeyPhrases: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetectKeyPhrases",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetectKeyPhrasesInput
  },
  output: {
    shape: DetectKeyPhrasesOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: TextSizeLimitExceededException
    },
    {
      shape: UnsupportedLanguageException
    },
    {
      shape: InternalServerException
    }
  ]
};
