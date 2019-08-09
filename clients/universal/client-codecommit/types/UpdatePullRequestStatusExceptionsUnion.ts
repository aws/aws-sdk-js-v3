import { PullRequestDoesNotExistException } from "./PullRequestDoesNotExistException";
import { InvalidPullRequestIdException } from "./InvalidPullRequestIdException";
import { PullRequestIdRequiredException } from "./PullRequestIdRequiredException";
import { InvalidPullRequestStatusUpdateException } from "./InvalidPullRequestStatusUpdateException";
import { InvalidPullRequestStatusException } from "./InvalidPullRequestStatusException";
import { PullRequestStatusRequiredException } from "./PullRequestStatusRequiredException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
export type UpdatePullRequestStatusExceptionsUnion =
  | PullRequestDoesNotExistException
  | InvalidPullRequestIdException
  | PullRequestIdRequiredException
  | InvalidPullRequestStatusUpdateException
  | InvalidPullRequestStatusException
  | PullRequestStatusRequiredException
  | EncryptionIntegrityChecksFailedException
  | EncryptionKeyAccessDeniedException
  | EncryptionKeyDisabledException
  | EncryptionKeyNotFoundException
  | EncryptionKeyUnavailableException;
