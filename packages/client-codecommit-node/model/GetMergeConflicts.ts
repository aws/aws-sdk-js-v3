import { GetMergeConflictsInput } from "./GetMergeConflictsInput";
import { GetMergeConflictsOutput } from "./GetMergeConflictsOutput";
import { RepositoryNameRequiredException } from "./RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { MergeOptionRequiredException } from "./MergeOptionRequiredException";
import { InvalidMergeOptionException } from "./InvalidMergeOptionException";
import { InvalidDestinationCommitSpecifierException } from "./InvalidDestinationCommitSpecifierException";
import { InvalidSourceCommitSpecifierException } from "./InvalidSourceCommitSpecifierException";
import { CommitRequiredException } from "./CommitRequiredException";
import { CommitDoesNotExistException } from "./CommitDoesNotExistException";
import { InvalidCommitException } from "./InvalidCommitException";
import { TipsDivergenceExceededException } from "./TipsDivergenceExceededException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
      shape: InvalidDestinationCommitSpecifierException
    },
    {
      shape: InvalidSourceCommitSpecifierException
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
