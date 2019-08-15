import { BatchDescribeMergeConflictsInput } from "../shapes/BatchDescribeMergeConflictsInput";
import { BatchDescribeMergeConflictsOutput } from "../shapes/BatchDescribeMergeConflictsOutput";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { MergeOptionRequiredException } from "../shapes/MergeOptionRequiredException";
import { InvalidMergeOptionException } from "../shapes/InvalidMergeOptionException";
import { InvalidContinuationTokenException } from "../shapes/InvalidContinuationTokenException";
import { CommitRequiredException } from "../shapes/CommitRequiredException";
import { CommitDoesNotExistException } from "../shapes/CommitDoesNotExistException";
import { InvalidCommitException } from "../shapes/InvalidCommitException";
import { TipsDivergenceExceededException } from "../shapes/TipsDivergenceExceededException";
import { InvalidMaxConflictFilesException } from "../shapes/InvalidMaxConflictFilesException";
import { InvalidMaxMergeHunksException } from "../shapes/InvalidMaxMergeHunksException";
import { InvalidConflictDetailLevelException } from "../shapes/InvalidConflictDetailLevelException";
import { InvalidConflictResolutionStrategyException } from "../shapes/InvalidConflictResolutionStrategyException";
import { MaximumFileContentToLoadExceededException } from "../shapes/MaximumFileContentToLoadExceededException";
import { MaximumItemsToCompareExceededException } from "../shapes/MaximumItemsToCompareExceededException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
