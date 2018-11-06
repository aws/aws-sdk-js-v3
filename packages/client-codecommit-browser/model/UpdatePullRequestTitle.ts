import {UpdatePullRequestTitleInput} from './UpdatePullRequestTitleInput';
import {UpdatePullRequestTitleOutput} from './UpdatePullRequestTitleOutput';
import {PullRequestDoesNotExistException} from './PullRequestDoesNotExistException';
import {InvalidPullRequestIdException} from './InvalidPullRequestIdException';
import {PullRequestIdRequiredException} from './PullRequestIdRequiredException';
import {TitleRequiredException} from './TitleRequiredException';
import {InvalidTitleException} from './InvalidTitleException';
import {PullRequestAlreadyClosedException} from './PullRequestAlreadyClosedException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdatePullRequestTitle: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdatePullRequestTitle',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdatePullRequestTitleInput,
    },
    output: {
        shape: UpdatePullRequestTitleOutput,
    },
    errors: [
        {
            shape: PullRequestDoesNotExistException,
        },
        {
            shape: InvalidPullRequestIdException,
        },
        {
            shape: PullRequestIdRequiredException,
        },
        {
            shape: TitleRequiredException,
        },
        {
            shape: InvalidTitleException,
        },
        {
            shape: PullRequestAlreadyClosedException,
        },
    ],
};