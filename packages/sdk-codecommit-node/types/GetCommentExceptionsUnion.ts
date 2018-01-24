import {CommentDoesNotExistException} from './CommentDoesNotExistException';
import {CommentIdRequiredException} from './CommentIdRequiredException';
import {InvalidCommentIdException} from './InvalidCommentIdException';
import {CommentDeletedException} from './CommentDeletedException';
export type GetCommentExceptionsUnion = CommentDoesNotExistException |
    CommentIdRequiredException |
    InvalidCommentIdException |
    CommentDeletedException;
