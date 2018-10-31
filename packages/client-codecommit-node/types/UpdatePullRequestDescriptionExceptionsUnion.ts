import {PullRequestDoesNotExistException} from './PullRequestDoesNotExistException';
import {InvalidPullRequestIdException} from './InvalidPullRequestIdException';
import {PullRequestIdRequiredException} from './PullRequestIdRequiredException';
import {InvalidDescriptionException} from './InvalidDescriptionException';
import {PullRequestAlreadyClosedException} from './PullRequestAlreadyClosedException';
export type UpdatePullRequestDescriptionExceptionsUnion = PullRequestDoesNotExistException |
    InvalidPullRequestIdException |
    PullRequestIdRequiredException |
    InvalidDescriptionException |
    PullRequestAlreadyClosedException;
