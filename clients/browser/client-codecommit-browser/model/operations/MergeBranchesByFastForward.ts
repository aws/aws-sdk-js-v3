import { MergeBranchesByFastForwardInput } from "../shapes/MergeBranchesByFastForwardInput";
import { MergeBranchesByFastForwardOutput } from "../shapes/MergeBranchesByFastForwardOutput";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { TipsDivergenceExceededException } from "../shapes/TipsDivergenceExceededException";
import { CommitRequiredException } from "../shapes/CommitRequiredException";
import { InvalidCommitException } from "../shapes/InvalidCommitException";
import { CommitDoesNotExistException } from "../shapes/CommitDoesNotExistException";
import { InvalidTargetBranchException } from "../shapes/InvalidTargetBranchException";
import { InvalidBranchNameException } from "../shapes/InvalidBranchNameException";
import { BranchNameRequiredException } from "../shapes/BranchNameRequiredException";
import { BranchNameIsTagNameException } from "../shapes/BranchNameIsTagNameException";
import { BranchDoesNotExistException } from "../shapes/BranchDoesNotExistException";
import { ManualMergeRequiredException } from "../shapes/ManualMergeRequiredException";
import { ConcurrentReferenceUpdateException } from "../shapes/ConcurrentReferenceUpdateException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const MergeBranchesByFastForward: _Operation_ = {
  metadata: ServiceMetadata,
  name: "MergeBranchesByFastForward",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: MergeBranchesByFastForwardInput
  },
  output: {
    shape: MergeBranchesByFastForwardOutput
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
