import { BatchDetectSyntaxInput } from "../shapes/BatchDetectSyntaxInput";
import { BatchDetectSyntaxOutput } from "../shapes/BatchDetectSyntaxOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TextSizeLimitExceededException } from "../shapes/TextSizeLimitExceededException";
import { UnsupportedLanguageException } from "../shapes/UnsupportedLanguageException";
import { BatchSizeLimitExceededException } from "../shapes/BatchSizeLimitExceededException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchDetectSyntax: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchDetectSyntax",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchDetectSyntaxInput
  },
  output: {
    shape: BatchDetectSyntaxOutput
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
