import {CommentDoesNotExistException} from './CommentDoesNotExistException';
import {CommentIdRequiredException} from './CommentIdRequiredException';
import {InvalidCommentIdException} from './InvalidCommentIdException';
import {CommentDeletedException} from './CommentDeletedException';
import {UnkownServiceException} from '@aws/types';
export type GetCommentExceptionsUnion = CommentDoesNotExistException |
    CommentIdRequiredException |
    InvalidCommentIdException |
    CommentDeletedException |
    UnkownServiceException;
