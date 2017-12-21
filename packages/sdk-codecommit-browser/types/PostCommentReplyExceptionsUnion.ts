import {ClientRequestTokenRequiredException} from './ClientRequestTokenRequiredException';
import {InvalidClientRequestTokenException} from './InvalidClientRequestTokenException';
import {IdempotencyParameterMismatchException} from './IdempotencyParameterMismatchException';
import {CommentContentRequiredException} from './CommentContentRequiredException';
import {CommentContentSizeLimitExceededException} from './CommentContentSizeLimitExceededException';
import {CommentDoesNotExistException} from './CommentDoesNotExistException';
import {CommentIdRequiredException} from './CommentIdRequiredException';
import {InvalidCommentIdException} from './InvalidCommentIdException';
import {UnkownServiceException} from '@aws/types';
export type PostCommentReplyExceptionsUnion = ClientRequestTokenRequiredException |
    InvalidClientRequestTokenException |
    IdempotencyParameterMismatchException |
    CommentContentRequiredException |
    CommentContentSizeLimitExceededException |
    CommentDoesNotExistException |
    CommentIdRequiredException |
    InvalidCommentIdException |
    UnkownServiceException;
