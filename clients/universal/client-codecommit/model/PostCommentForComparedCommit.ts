import { PostCommentForComparedCommitInput } from "./PostCommentForComparedCommitInput";
import { PostCommentForComparedCommitOutput } from "./PostCommentForComparedCommitOutput";
import { RepositoryNameRequiredException } from "./RepositoryNameRequiredException";
import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { ClientRequestTokenRequiredException } from "./ClientRequestTokenRequiredException";
import { InvalidClientRequestTokenException } from "./InvalidClientRequestTokenException";
import { IdempotencyParameterMismatchException } from "./IdempotencyParameterMismatchException";
import { CommentContentRequiredException } from "./CommentContentRequiredException";
import { CommentContentSizeLimitExceededException } from "./CommentContentSizeLimitExceededException";
import { InvalidFileLocationException } from "./InvalidFileLocationException";
import { InvalidRelativeFileVersionEnumException } from "./InvalidRelativeFileVersionEnumException";
import { PathRequiredException } from "./PathRequiredException";
import { InvalidFilePositionException } from "./InvalidFilePositionException";
import { CommitIdRequiredException } from "./CommitIdRequiredException";
import { InvalidCommitIdException } from "./InvalidCommitIdException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
import { BeforeCommitIdAndAfterCommitIdAreSameException } from "./BeforeCommitIdAndAfterCommitIdAreSameException";
import { CommitDoesNotExistException } from "./CommitDoesNotExistException";
import { InvalidPathException } from "./InvalidPathException";
import { PathDoesNotExistException } from "./PathDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PostCommentForComparedCommit: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PostCommentForComparedCommit",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PostCommentForComparedCommitInput
  },
  output: {
    shape: PostCommentForComparedCommitOutput
  },
  errors: [
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
      shape: BeforeCommitIdAndAfterCommitIdAreSameException
    },
    {
      shape: CommitDoesNotExistException
    },
    {
      shape: InvalidPathException
    },
    {
      shape: PathDoesNotExistException
    }
  ]
};
