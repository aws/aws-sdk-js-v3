import { DetectSyntaxInput } from "../shapes/DetectSyntaxInput";
import { DetectSyntaxOutput } from "../shapes/DetectSyntaxOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TextSizeLimitExceededException } from "../shapes/TextSizeLimitExceededException";
import { UnsupportedLanguageException } from "../shapes/UnsupportedLanguageException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
