import { DeleteVocabularyInput } from "./DeleteVocabularyInput";
import { DeleteVocabularyOutput } from "./DeleteVocabularyOutput";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { BadRequestException } from "./BadRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteVocabulary: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVocabulary",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteVocabularyInput
  },
  output: {
    shape: DeleteVocabularyOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: BadRequestException
    },
    {
      shape: InternalFailureException
    }
  ]
};
