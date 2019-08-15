import { CreatePullRequestInput } from "../shapes/CreatePullRequestInput";
import { CreatePullRequestOutput } from "../shapes/CreatePullRequestOutput";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { ClientRequestTokenRequiredException } from "../shapes/ClientRequestTokenRequiredException";
import { InvalidClientRequestTokenException } from "../shapes/InvalidClientRequestTokenException";
import { IdempotencyParameterMismatchException } from "../shapes/IdempotencyParameterMismatchException";
import { ReferenceNameRequiredException } from "../shapes/ReferenceNameRequiredException";
import { InvalidReferenceNameException } from "../shapes/InvalidReferenceNameException";
import { ReferenceDoesNotExistException } from "../shapes/ReferenceDoesNotExistException";
import { ReferenceTypeNotSupportedException } from "../shapes/ReferenceTypeNotSupportedException";
import { TitleRequiredException } from "../shapes/TitleRequiredException";
import { InvalidTitleException } from "../shapes/InvalidTitleException";
import { InvalidDescriptionException } from "../shapes/InvalidDescriptionException";
import { TargetsRequiredException } from "../shapes/TargetsRequiredException";
import { InvalidTargetsException } from "../shapes/InvalidTargetsException";
import { TargetRequiredException } from "../shapes/TargetRequiredException";
import { InvalidTargetException } from "../shapes/InvalidTargetException";
import { MultipleRepositoriesInPullRequestException } from "../shapes/MultipleRepositoriesInPullRequestException";
import { MaximumOpenPullRequestsExceededException } from "../shapes/MaximumOpenPullRequestsExceededException";
import { SourceAndDestinationAreSameException } from "../shapes/SourceAndDestinationAreSameException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreatePullRequest: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePullRequest",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreatePullRequestInput
  },
  output: {
    shape: CreatePullRequestOutput
  },
  errors: [
    {
      shape: RepositoryNameRequiredException
    },
    {
      shape: InvalidRepositoryNameException
    },
    {
      shape: RepositoryDoesNotExistException
    },
    {
      shape: EncryptionIntegrityChecksFailedException
    },
    {
      shape: EncryptionKeyAccessDeniedException
    },
    {
      shape: EncryptionKeyDisabledException
    },
    {
      shape: EncryptionKeyNotFoundException
    },
    {
      shape: EncryptionKeyUnavailableException
    },
    {
      shape: ClientRequestTokenRequiredException
    },
    {
      shape: InvalidClientRequestTokenException
    },
    {
      shape: IdempotencyParameterMismatchException
    },
    {
      shape: ReferenceNameRequiredException
    },
    {
      shape: InvalidReferenceNameException
    },
    {
      shape: ReferenceDoesNotExistException
    },
    {
      shape: ReferenceTypeNotSupportedException
    },
    {
      shape: TitleRequiredException
    },
    {
      shape: InvalidTitleException
    },
    {
      shape: InvalidDescriptionException
    },
    {
      shape: TargetsRequiredException
    },
    {
      shape: InvalidTargetsException
    },
    {
      shape: TargetRequiredException
    },
    {
      shape: InvalidTargetException
    },
    {
      shape: MultipleRepositoriesInPullRequestException
    },
    {
      shape: MaximumOpenPullRequestsExceededException
    },
    {
      shape: SourceAndDestinationAreSameException
    }
  ]
};
