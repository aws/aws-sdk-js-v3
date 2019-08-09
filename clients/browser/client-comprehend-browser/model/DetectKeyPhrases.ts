import { DetectKeyPhrasesInput } from "./DetectKeyPhrasesInput";
import { DetectKeyPhrasesOutput } from "./DetectKeyPhrasesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TextSizeLimitExceededException } from "./TextSizeLimitExceededException";
import { UnsupportedLanguageException } from "./UnsupportedLanguageException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
