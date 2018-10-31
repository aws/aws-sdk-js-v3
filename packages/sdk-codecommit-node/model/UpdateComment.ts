import {UpdateCommentInput} from './UpdateCommentInput';
import {UpdateCommentOutput} from './UpdateCommentOutput';
import {CommentContentRequiredException} from './CommentContentRequiredException';
import {CommentContentSizeLimitExceededException} from './CommentContentSizeLimitExceededException';
import {CommentDoesNotExistException} from './CommentDoesNotExistException';
import {CommentIdRequiredException} from './CommentIdRequiredException';
import {InvalidCommentIdException} from './InvalidCommentIdException';
import {CommentNotCreatedByCallerException} from './CommentNotCreatedByCallerException';
import {CommentDeletedException} from './CommentDeletedException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateComment: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdateComment',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdateCommentInput,
    },
    output: {
        shape: UpdateCommentOutput,
    },
    errors: [
        {
            shape: CommentContentRequiredException,
        },
        {
            shape: CommentContentSizeLimitExceededException,
        },
        {
            shape: CommentDoesNotExistException,
        },
        {
            shape: CommentIdRequiredException,
        },
        {
            shape: InvalidCommentIdException,
        },
        {
            shape: CommentNotCreatedByCallerException,
        },
        {
            shape: CommentDeletedException,
        },
    ],
};