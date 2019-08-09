import { DetectSyntaxInput } from "./DetectSyntaxInput";
import { DetectSyntaxOutput } from "./DetectSyntaxOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TextSizeLimitExceededException } from "./TextSizeLimitExceededException";
import { UnsupportedLanguageException } from "./UnsupportedLanguageException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DetectSyntax: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetectSyntax",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetectSyntaxInput
  },
  output: {
    shape: DetectSyntaxOutput
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
