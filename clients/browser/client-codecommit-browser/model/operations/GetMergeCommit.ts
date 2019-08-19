import { GetMergeCommitInput } from "../shapes/GetMergeCommitInput";
import { GetMergeCommitOutput } from "../shapes/GetMergeCommitOutput";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { CommitRequiredException } from "../shapes/CommitRequiredException";
import { InvalidCommitException } from "../shapes/InvalidCommitException";
import { CommitDoesNotExistException } from "../shapes/CommitDoesNotExistException";
import { InvalidConflictDetailLevelException } from "../shapes/InvalidConflictDetailLevelException";
import { InvalidConflictResolutionStrategyException } from "../shapes/InvalidConflictResolutionStrategyException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetMergeCommit: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMergeCommit",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetMergeCommitInput
  },
  output: {
    shape: GetMergeCommitOutput
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
      shape: CommitRequiredException
    },
    {
      shape: InvalidCommitException
    },
    {
      shape: CommitDoesNotExistException
    },
    {
      shape: InvalidConflictDetailLevelException
    },
    {
      shape: InvalidConflictResolutionStrategyException
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
