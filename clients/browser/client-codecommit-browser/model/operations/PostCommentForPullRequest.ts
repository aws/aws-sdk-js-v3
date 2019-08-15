import { PostCommentForPullRequestInput } from "../shapes/PostCommentForPullRequestInput";
import { PostCommentForPullRequestOutput } from "../shapes/PostCommentForPullRequestOutput";
import { PullRequestDoesNotExistException } from "../shapes/PullRequestDoesNotExistException";
import { InvalidPullRequestIdException } from "../shapes/InvalidPullRequestIdException";
import { PullRequestIdRequiredException } from "../shapes/PullRequestIdRequiredException";
import { RepositoryNotAssociatedWithPullRequestException } from "../shapes/RepositoryNotAssociatedWithPullRequestException";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { ClientRequestTokenRequiredException } from "../shapes/ClientRequestTokenRequiredException";
import { InvalidClientRequestTokenException } from "../shapes/InvalidClientRequestTokenException";
import { IdempotencyParameterMismatchException } from "../shapes/IdempotencyParameterMismatchException";
import { CommentContentRequiredException } from "../shapes/CommentContentRequiredException";
import { CommentContentSizeLimitExceededException } from "../shapes/CommentContentSizeLimitExceededException";
import { InvalidFileLocationException } from "../shapes/InvalidFileLocationException";
import { InvalidRelativeFileVersionEnumException } from "../shapes/InvalidRelativeFileVersionEnumException";
import { PathRequiredException } from "../shapes/PathRequiredException";
import { InvalidFilePositionException } from "../shapes/InvalidFilePositionException";
import { CommitIdRequiredException } from "../shapes/CommitIdRequiredException";
import { InvalidCommitIdException } from "../shapes/InvalidCommitIdException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { CommitDoesNotExistException } from "../shapes/CommitDoesNotExistException";
import { InvalidPathException } from "../shapes/InvalidPathException";
import { PathDoesNotExistException } from "../shapes/PathDoesNotExistException";
import { BeforeCommitIdAndAfterCommitIdAreSameException } from "../shapes/BeforeCommitIdAndAfterCommitIdAreSameException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PostCommentForPullRequest: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PostCommentForPullRequest",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PostCommentForPullRequestInput
  },
  output: {
    shape: PostCommentForPullRequestOutput
  },
  errors: [
    {
      shape: PullRequestDoesNotExistException
    },
    {
      shape: InvalidPullRequestIdException
    },
    {
      shape: PullRequestIdRequiredException
    },
    {
      shape: RepositoryNotAssociatedWithPullRequestException
    },
    {
      shape: RepositoryNameRequiredException
    },
    {
      shape: RepositoryDoesNotExistException
    },
    {
      shape: InvalidRepositoryNameException
    },
    {
      shape: ClientRequestTokenRequiredException
    },
    {
      shape: InvalidClientRequestTokenException
    },
    {
      shape: IdempotencyParameterMismatchException
    },
    {
      shape: CommentContentRequiredException
    },
    {
      shape: CommentContentSizeLimitExceededException
    },
    {
      shape: InvalidFileLocationException
    },
    {
      shape: InvalidRelativeFileVersionEnumException
    },
    {
      shape: PathRequiredException
    },
    {
      shape: InvalidFilePositionException
    },
    {
      shape: CommitIdRequiredException
    },
    {
      shape: InvalidCommitIdException
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
    },
    {
      shape: CommitDoesNotExistException
    },
    {
      shape: InvalidPathException
    },
    {
      shape: PathDoesNotExistException
    },
    {
      shape: PathRequiredException
    },
    {
      shape: BeforeCommitIdAndAfterCommitIdAreSameException
    }
  ]
};
