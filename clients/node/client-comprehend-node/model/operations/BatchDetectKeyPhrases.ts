import { BatchDetectKeyPhrasesInput } from "../shapes/BatchDetectKeyPhrasesInput";
import { BatchDetectKeyPhrasesOutput } from "../shapes/BatchDetectKeyPhrasesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TextSizeLimitExceededException } from "../shapes/TextSizeLimitExceededException";
import { UnsupportedLanguageException } from "../shapes/UnsupportedLanguageException";
import { BatchSizeLimitExceededException } from "../shapes/BatchSizeLimitExceededException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
