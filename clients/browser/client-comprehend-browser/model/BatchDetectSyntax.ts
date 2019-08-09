import { BatchDetectSyntaxInput } from "./BatchDetectSyntaxInput";
import { BatchDetectSyntaxOutput } from "./BatchDetectSyntaxOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TextSizeLimitExceededException } from "./TextSizeLimitExceededException";
import { UnsupportedLanguageException } from "./UnsupportedLanguageException";
import { BatchSizeLimitExceededException } from "./BatchSizeLimitExceededException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
