import { BatchDescribeMergeConflictsInput } from "./BatchDescribeMergeConflictsInput";
import { BatchDescribeMergeConflictsOutput } from "./BatchDescribeMergeConflictsOutput";
import { RepositoryNameRequiredException } from "./RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { MergeOptionRequiredException } from "./MergeOptionRequiredException";
import { InvalidMergeOptionException } from "./InvalidMergeOptionException";
import { InvalidContinuationTokenException } from "./InvalidContinuationTokenException";
import { CommitRequiredException } from "./CommitRequiredException";
import { CommitDoesNotExistException } from "./CommitDoesNotExistException";
import { InvalidCommitException } from "./InvalidCommitException";
import { TipsDivergenceExceededException } from "./TipsDivergenceExceededException";
import { InvalidMaxConflictFilesException } from "./InvalidMaxConflictFilesException";
import { InvalidMaxMergeHunksException } from "./InvalidMaxMergeHunksException";
import { InvalidConflictDetailLevelException } from "./InvalidConflictDetailLevelException";
import { InvalidConflictResolutionStrategyException } from "./InvalidConflictResolutionStrategyException";
import { MaximumFileContentToLoadExceededException } from "./MaximumFileContentToLoadExceededException";
import { MaximumItemsToCompareExceededException } from "./MaximumItemsToCompareExceededException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchDescribeMergeConflicts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchDescribeMergeConflicts",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchDescribeMergeConflictsInput
  },
  output: {
    shape: BatchDescribeMergeConflictsOutput
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
      shape: MergeOptionRequiredException
    },
    {
      shape: InvalidMergeOptionException
    },
    {
      shape: InvalidContinuationTokenException
    },
    {
      shape: CommitRequiredException
    },
    {
      shape: CommitDoesNotExistException
    },
    {
      shape: InvalidCommitException
    },
    {
      shape: TipsDivergenceExceededException
    },
    {
      shape: InvalidMaxConflictFilesException
    },
    {
      shape: InvalidMaxMergeHunksException
    },
    {
      shape: InvalidConflictDetailLevelException
    },
    {
      shape: InvalidConflictResolutionStrategyException
    },
    {
      shape: MaximumFileContentToLoadExceededException
    },
    {
      shape: MaximumItemsToCompareExceededException
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
