import { GetMergeConflictsInput } from "../shapes/GetMergeConflictsInput";
import { GetMergeConflictsOutput } from "../shapes/GetMergeConflictsOutput";
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
import { InvalidConflictDetailLevelException } from "../shapes/InvalidConflictDetailLevelException";
import { InvalidDestinationCommitSpecifierException } from "../shapes/InvalidDestinationCommitSpecifierException";
import { InvalidSourceCommitSpecifierException } from "../shapes/InvalidSourceCommitSpecifierException";
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

export const GetMergeConflicts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMergeConflicts",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetMergeConflictsInput
  },
  output: {
    shape: GetMergeConflictsOutput
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
      shape: InvalidConflictDetailLevelException
    },
    {
      shape: InvalidDestinationCommitSpecifierException
    },
    {
      shape: InvalidSourceCommitSpecifierException
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
