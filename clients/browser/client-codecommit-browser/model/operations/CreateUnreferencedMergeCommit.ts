import { CreateUnreferencedMergeCommitInput } from "../shapes/CreateUnreferencedMergeCommitInput";
import { CreateUnreferencedMergeCommitOutput } from "../shapes/CreateUnreferencedMergeCommitOutput";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { TipsDivergenceExceededException } from "../shapes/TipsDivergenceExceededException";
import { CommitRequiredException } from "../shapes/CommitRequiredException";
import { InvalidCommitException } from "../shapes/InvalidCommitException";
import { CommitDoesNotExistException } from "../shapes/CommitDoesNotExistException";
import { MergeOptionRequiredException } from "../shapes/MergeOptionRequiredException";
import { InvalidMergeOptionException } from "../shapes/InvalidMergeOptionException";
import { InvalidConflictDetailLevelException } from "../shapes/InvalidConflictDetailLevelException";
import { InvalidConflictResolutionStrategyException } from "../shapes/InvalidConflictResolutionStrategyException";
import { InvalidConflictResolutionException } from "../shapes/InvalidConflictResolutionException";
import { ManualMergeRequiredException } from "../shapes/ManualMergeRequiredException";
import { MaximumConflictResolutionEntriesExceededException } from "../shapes/MaximumConflictResolutionEntriesExceededException";
import { MultipleConflictResolutionEntriesException } from "../shapes/MultipleConflictResolutionEntriesException";
import { ReplacementTypeRequiredException } from "../shapes/ReplacementTypeRequiredException";
import { InvalidReplacementTypeException } from "../shapes/InvalidReplacementTypeException";
import { ReplacementContentRequiredException } from "../shapes/ReplacementContentRequiredException";
import { InvalidReplacementContentException } from "../shapes/InvalidReplacementContentException";
import { PathRequiredException } from "../shapes/PathRequiredException";
import { InvalidPathException } from "../shapes/InvalidPathException";
import { FileContentSizeLimitExceededException } from "../shapes/FileContentSizeLimitExceededException";
import { FolderContentSizeLimitExceededException } from "../shapes/FolderContentSizeLimitExceededException";
import { MaximumFileContentToLoadExceededException } from "../shapes/MaximumFileContentToLoadExceededException";
import { MaximumItemsToCompareExceededException } from "../shapes/MaximumItemsToCompareExceededException";
import { ConcurrentReferenceUpdateException } from "../shapes/ConcurrentReferenceUpdateException";
import { FileModeRequiredException } from "../shapes/FileModeRequiredException";
import { InvalidFileModeException } from "../shapes/InvalidFileModeException";
import { NameLengthExceededException } from "../shapes/NameLengthExceededException";
import { InvalidEmailException } from "../shapes/InvalidEmailException";
import { CommitMessageLengthExceededException } from "../shapes/CommitMessageLengthExceededException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateUnreferencedMergeCommit: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateUnreferencedMergeCommit",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateUnreferencedMergeCommitInput
  },
  output: {
    shape: CreateUnreferencedMergeCommitOutput
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
      shape: TipsDivergenceExceededException
    },
    {
      shape: CommitRequiredException
    },
    {
      shape: InvalidCommitException
    },
    {
      shape: CommitDoesNotExistException
    },
    {
      shape: MergeOptionRequiredException
    },
    {
      shape: InvalidMergeOptionException
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
      shape: ManualMergeRequiredException
    },
    {
      shape: MaximumConflictResolutionEntriesExceededException
    },
    {
      shape: MultipleConflictResolutionEntriesException
    },
    {
      shape: ReplacementTypeRequiredException
    },
    {
      shape: InvalidReplacementTypeException
    },
    {
      shape: ReplacementContentRequiredException
    },
    {
      shape: InvalidReplacementContentException
    },
    {
      shape: PathRequiredException
    },
    {
      shape: InvalidPathException
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
      shape: ConcurrentReferenceUpdateException
    },
    {
      shape: FileModeRequiredException
    },
    {
      shape: InvalidFileModeException
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
