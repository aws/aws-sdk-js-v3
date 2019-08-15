import { DeleteVocabularyInput } from "../shapes/DeleteVocabularyInput";
import { DeleteVocabularyOutput } from "../shapes/DeleteVocabularyOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
