import { MergePullRequestBySquashInput } from "./MergePullRequestBySquashInput";
import { MergePullRequestBySquashOutput } from "./MergePullRequestBySquashOutput";
import { PullRequestAlreadyClosedException } from "./PullRequestAlreadyClosedException";
import { PullRequestDoesNotExistException } from "./PullRequestDoesNotExistException";
import { PullRequestIdRequiredException } from "./PullRequestIdRequiredException";
import { InvalidPullRequestIdException } from "./InvalidPullRequestIdException";
import { InvalidCommitIdException } from "./InvalidCommitIdException";
import { ManualMergeRequiredException } from "./ManualMergeRequiredException";
import { TipOfSourceReferenceIsDifferentException } from "./TipOfSourceReferenceIsDifferentException";
import { TipsDivergenceExceededException } from "./TipsDivergenceExceededException";
import { NameLengthExceededException } from "./NameLengthExceededException";
import { InvalidEmailException } from "./InvalidEmailException";
import { CommitMessageLengthExceededException } from "./CommitMessageLengthExceededException";
import { InvalidConflictDetailLevelException } from "./InvalidConflictDetailLevelException";
import { InvalidConflictResolutionStrategyException } from "./InvalidConflictResolutionStrategyException";
import { InvalidConflictResolutionException } from "./InvalidConflictResolutionException";
import { ReplacementTypeRequiredException } from "./ReplacementTypeRequiredException";
import { InvalidReplacementTypeException } from "./InvalidReplacementTypeException";
import { MultipleConflictResolutionEntriesException } from "./MultipleConflictResolutionEntriesException";
import { ReplacementContentRequiredException } from "./ReplacementContentRequiredException";
import { MaximumConflictResolutionEntriesExceededException } from "./MaximumConflictResolutionEntriesExceededException";
import { ConcurrentReferenceUpdateException } from "./ConcurrentReferenceUpdateException";
import { PathRequiredException } from "./PathRequiredException";
import { InvalidPathException } from "./InvalidPathException";
import { InvalidFileModeException } from "./InvalidFileModeException";
import { InvalidReplacementContentException } from "./InvalidReplacementContentException";
import { FileContentSizeLimitExceededException } from "./FileContentSizeLimitExceededException";
import { FolderContentSizeLimitExceededException } from "./FolderContentSizeLimitExceededException";
import { MaximumFileContentToLoadExceededException } from "./MaximumFileContentToLoadExceededException";
import { MaximumItemsToCompareExceededException } from "./MaximumItemsToCompareExceededException";
import { RepositoryNameRequiredException } from "./RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { RepositoryNotAssociatedWithPullRequestException } from "./RepositoryNotAssociatedWithPullRequestException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const MergePullRequestBySquash: _Operation_ = {
  metadata: ServiceMetadata,
  name: "MergePullRequestBySquash",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: MergePullRequestBySquashInput
  },
  output: {
    shape: MergePullRequestBySquashOutput
  },
  errors: [
    {
      shape: PullRequestAlreadyClosedException
    },
    {
      shape: PullRequestDoesNotExistException
    },
    {
      shape: PullRequestIdRequiredException
    },
    {
      shape: InvalidPullRequestIdException
    },
    {
      shape: InvalidCommitIdException
    },
    {
      shape: ManualMergeRequiredException
    },
    {
      shape: TipOfSourceReferenceIsDifferentException
    },
    {
      shape: TipsDivergenceExceededException
    },
    {
      shape: NameLengthExceededException
    },
    {
      shape: InvalidEmailException
    },
    {
      shape: CommitMessageLengthExceededException
    },
    {
      shape: InvalidConflictDetailLevelException
    },
    {
      shape: InvalidConflictResolutionStrategyException
    },
    {
      shape: InvalidConflictResolutionException
    },
    {
      shape: ReplacementTypeRequiredException
    },
    {
      shape: InvalidReplacementTypeException
    },
    {
      shape: MultipleConflictResolutionEntriesException
    },
    {
      shape: ReplacementContentRequiredException
    },
    {
      shape: MaximumConflictResolutionEntriesExceededException
    },
    {
      shape: ConcurrentReferenceUpdateException
    },
    {
      shape: PathRequiredException
    },
    {
      shape: InvalidPathException
    },
    {
      shape: InvalidFileModeException
    },
    {
      shape: InvalidReplacementContentException
    },
    {
      shape: FileContentSizeLimitExceededException
    },
    {
      shape: FolderContentSizeLimitExceededException
    },
    {
      shape: MaximumFileContentToLoadExceededException
    },
    {
      shape: MaximumItemsToCompareExceededException
    },
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
      shape: RepositoryNotAssociatedWithPullRequestException
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
    }
  ]
};
