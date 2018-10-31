import {CommentContentRequiredException} from './CommentContentRequiredException';
import {CommentContentSizeLimitExceededException} from './CommentContentSizeLimitExceededException';
import {CommentDoesNotExistException} from './CommentDoesNotExistException';
import {CommentIdRequiredException} from './CommentIdRequiredException';
import {InvalidCommentIdException} from './InvalidCommentIdException';
import {CommentNotCreatedByCallerException} from './CommentNotCreatedByCallerException';
import {CommentDeletedException} from './CommentDeletedException';
export type UpdateCommentExceptionsUnion = CommentContentRequiredException |
    CommentContentSizeLimitExceededException |
    CommentDoesNotExistException |
    CommentIdRequiredException |
    InvalidCommentIdException |
    CommentNotCreatedByCallerException |
    CommentDeletedException;
