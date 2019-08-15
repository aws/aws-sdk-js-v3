import { CreateDocumentClassifierInput } from "../shapes/CreateDocumentClassifierInput";
import { CreateDocumentClassifierOutput } from "../shapes/CreateDocumentClassifierOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ResourceLimitExceededException } from "../shapes/ResourceLimitExceededException";
import { UnsupportedLanguageException } from "../shapes/UnsupportedLanguageException";
import { KmsKeyValidationException } from "../shapes/KmsKeyValidationException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDocumentClassifier: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDocumentClassifier",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDocumentClassifierInput
  },
  output: {
    shape: CreateDocumentClassifierOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: TooManyTagsException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ResourceLimitExceededException
    },
    {
      shape: UnsupportedLanguageException
    },
    {
      shape: KmsKeyValidationException
    },
    {
      shape: InternalServerException
    }
  ]
};
