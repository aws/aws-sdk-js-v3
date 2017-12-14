import {PullRequestDoesNotExistException} from './PullRequestDoesNotExistException';
import {InvalidPullRequestIdException} from './InvalidPullRequestIdException';
import {PullRequestIdRequiredException} from './PullRequestIdRequiredException';
import {InvalidDescriptionException} from './InvalidDescriptionException';
import {PullRequestAlreadyClosedException} from './PullRequestAlreadyClosedException';
import {UnkownServiceException} from '@aws/types';
export type UpdatePullRequestDescriptionExceptionsUnion = PullRequestDoesNotExistException |
    InvalidPullRequestIdException |
    PullRequestIdRequiredException |
    InvalidDescriptionException |
    PullRequestAlreadyClosedException |
    UnkownServiceException;
