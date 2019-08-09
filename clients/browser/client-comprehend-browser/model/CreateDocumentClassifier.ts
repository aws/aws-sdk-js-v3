import { CreateDocumentClassifierInput } from "./CreateDocumentClassifierInput";
import { CreateDocumentClassifierOutput } from "./CreateDocumentClassifierOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceInUseException } from "./ResourceInUseException";
import { TooManyTagsException } from "./TooManyTagsException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { UnsupportedLanguageException } from "./UnsupportedLanguageException";
import { KmsKeyValidationException } from "./KmsKeyValidationException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
