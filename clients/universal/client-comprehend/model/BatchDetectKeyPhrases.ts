import { BatchDetectKeyPhrasesInput } from "./BatchDetectKeyPhrasesInput";
import { BatchDetectKeyPhrasesOutput } from "./BatchDetectKeyPhrasesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TextSizeLimitExceededException } from "./TextSizeLimitExceededException";
import { UnsupportedLanguageException } from "./UnsupportedLanguageException";
import { BatchSizeLimitExceededException } from "./BatchSizeLimitExceededException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchDetectKeyPhrases: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchDetectKeyPhrases",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchDetectKeyPhrasesInput
  },
  output: {
    shape: BatchDetectKeyPhrasesOutput
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
      shape: BatchSizeLimitExceededException
    },
    {
      shape: InternalServerException
    }
  ]
};
