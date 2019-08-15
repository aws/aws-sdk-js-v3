import { MergePullRequestByThreeWayInput } from "../shapes/MergePullRequestByThreeWayInput";
import { MergePullRequestByThreeWayOutput } from "../shapes/MergePullRequestByThreeWayOutput";
import { PullRequestAlreadyClosedException } from "../shapes/PullRequestAlreadyClosedException";
import { PullRequestDoesNotExistException } from "../shapes/PullRequestDoesNotExistException";
import { PullRequestIdRequiredException } from "../shapes/PullRequestIdRequiredException";
import { InvalidPullRequestIdException } from "../shapes/InvalidPullRequestIdException";
import { InvalidCommitIdException } from "../shapes/InvalidCommitIdException";
import { ManualMergeRequiredException } from "../shapes/ManualMergeRequiredException";
import { TipOfSourceReferenceIsDifferentException } from "../shapes/TipOfSourceReferenceIsDifferentException";
import { TipsDivergenceExceededException } from "../shapes/TipsDivergenceExceededException";
import { NameLengthExceededException } from "../shapes/NameLengthExceededException";
import { InvalidEmailException } from "../shapes/InvalidEmailException";
import { CommitMessageLengthExceededException } from "../shapes/CommitMessageLengthExceededException";
import { InvalidConflictDetailLevelException } from "../shapes/InvalidConflictDetailLevelException";
import { InvalidConflictResolutionStrategyException } from "../shapes/InvalidConflictResolutionStrategyException";
import { InvalidConflictResolutionException } from "../shapes/InvalidConflictResolutionException";
import { ReplacementTypeRequiredException } from "../shapes/ReplacementTypeRequiredException";
import { InvalidReplacementTypeException } from "../shapes/InvalidReplacementTypeException";
import { MultipleConflictResolutionEntriesException } from "../shapes/MultipleConflictResolutionEntriesException";
import { ReplacementContentRequiredException } from "../shapes/ReplacementContentRequiredException";
import { MaximumConflictResolutionEntriesExceededException } from "../shapes/MaximumConflictResolutionEntriesExceededException";
import { PathRequiredException } from "../shapes/PathRequiredException";
import { InvalidPathException } from "../shapes/InvalidPathException";
import { InvalidFileModeException } from "../shapes/InvalidFileModeException";
import { InvalidReplacementContentException } from "../shapes/InvalidReplacementContentException";
import { FileContentSizeLimitExceededException } from "../shapes/FileContentSizeLimitExceededException";
import { FolderContentSizeLimitExceededException } from "../shapes/FolderContentSizeLimitExceededException";
import { MaximumFileContentToLoadExceededException } from "../shapes/MaximumFileContentToLoadExceededException";
import { MaximumItemsToCompareExceededException } from "../shapes/MaximumItemsToCompareExceededException";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { RepositoryNotAssociatedWithPullRequestException } from "../shapes/RepositoryNotAssociatedWithPullRequestException";
import { ConcurrentReferenceUpdateException } from "../shapes/ConcurrentReferenceUpdateException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const MergePullRequestByThreeWay: _Operation_ = {
  metadata: ServiceMetadata,
  name: "MergePullRequestByThreeWay",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: MergePullRequestByThreeWayInput
  },
  output: {
    shape: MergePullRequestByThreeWayOutput
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
      shape: ConcurrentReferenceUpdateException
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
