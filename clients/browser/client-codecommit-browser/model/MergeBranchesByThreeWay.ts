import { MergeBranchesByThreeWayInput } from "./MergeBranchesByThreeWayInput";
import { MergeBranchesByThreeWayOutput } from "./MergeBranchesByThreeWayOutput";
import { RepositoryNameRequiredException } from "./RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { TipsDivergenceExceededException } from "./TipsDivergenceExceededException";
import { CommitRequiredException } from "./CommitRequiredException";
import { InvalidCommitException } from "./InvalidCommitException";
import { CommitDoesNotExistException } from "./CommitDoesNotExistException";
import { InvalidTargetBranchException } from "./InvalidTargetBranchException";
import { InvalidBranchNameException } from "./InvalidBranchNameException";
import { BranchNameRequiredException } from "./BranchNameRequiredException";
import { BranchNameIsTagNameException } from "./BranchNameIsTagNameException";
import { BranchDoesNotExistException } from "./BranchDoesNotExistException";
import { ManualMergeRequiredException } from "./ManualMergeRequiredException";
import { ConcurrentReferenceUpdateException } from "./ConcurrentReferenceUpdateException";
import { InvalidConflictDetailLevelException } from "./InvalidConflictDetailLevelException";
import { InvalidConflictResolutionStrategyException } from "./InvalidConflictResolutionStrategyException";
import { InvalidConflictResolutionException } from "./InvalidConflictResolutionException";
import { MaximumConflictResolutionEntriesExceededException } from "./MaximumConflictResolutionEntriesExceededException";
import { MultipleConflictResolutionEntriesException } from "./MultipleConflictResolutionEntriesException";
import { ReplacementTypeRequiredException } from "./ReplacementTypeRequiredException";
import { InvalidReplacementTypeException } from "./InvalidReplacementTypeException";
import { ReplacementContentRequiredException } from "./ReplacementContentRequiredException";
import { InvalidReplacementContentException } from "./InvalidReplacementContentException";
import { PathRequiredException } from "./PathRequiredException";
import { InvalidPathException } from "./InvalidPathException";
import { FileContentSizeLimitExceededException } from "./FileContentSizeLimitExceededException";
import { FolderContentSizeLimitExceededException } from "./FolderContentSizeLimitExceededException";
import { MaximumFileContentToLoadExceededException } from "./MaximumFileContentToLoadExceededException";
import { MaximumItemsToCompareExceededException } from "./MaximumItemsToCompareExceededException";
import { FileModeRequiredException } from "./FileModeRequiredException";
import { InvalidFileModeException } from "./InvalidFileModeException";
import { NameLengthExceededException } from "./NameLengthExceededException";
import { InvalidEmailException } from "./InvalidEmailException";
import { CommitMessageLengthExceededException } from "./CommitMessageLengthExceededException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const MergeBranchesByThreeWay: _Operation_ = {
  metadata: ServiceMetadata,
  name: "MergeBranchesByThreeWay",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: MergeBranchesByThreeWayInput
  },
  output: {
    shape: MergeBranchesByThreeWayOutput
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
      shape: InvalidTargetBranchException
    },
    {
      shape: InvalidBranchNameException
    },
    {
      shape: BranchNameRequiredException
    },
    {
      shape: BranchNameIsTagNameException
    },
    {
      shape: BranchDoesNotExistException
    },
    {
      shape: ManualMergeRequiredException
    },
    {
      shape: ConcurrentReferenceUpdateException
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
