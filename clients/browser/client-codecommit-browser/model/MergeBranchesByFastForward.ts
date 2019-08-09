import { MergeBranchesByFastForwardInput } from "./MergeBranchesByFastForwardInput";
import { MergeBranchesByFastForwardOutput } from "./MergeBranchesByFastForwardOutput";
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
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
