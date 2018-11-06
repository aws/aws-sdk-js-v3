import {GetCommentInput} from './GetCommentInput';
import {GetCommentOutput} from './GetCommentOutput';
import {CommentDoesNotExistException} from './CommentDoesNotExistException';
import {CommentIdRequiredException} from './CommentIdRequiredException';
import {InvalidCommentIdException} from './InvalidCommentIdException';
import {CommentDeletedException} from './CommentDeletedException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetComment: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetComment',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetCommentInput,
    },
    output: {
        shape: GetCommentOutput,
    },
    errors: [
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
            shape: CommentDeletedException,
        },
    ],
};