import {PullRequestDoesNotExistException} from './PullRequestDoesNotExistException';
import {InvalidPullRequestIdException} from './InvalidPullRequestIdException';
import {PullRequestIdRequiredException} from './PullRequestIdRequiredException';
import {TitleRequiredException} from './TitleRequiredException';
import {InvalidTitleException} from './InvalidTitleException';
import {PullRequestAlreadyClosedException} from './PullRequestAlreadyClosedException';
export type UpdatePullRequestTitleExceptionsUnion = PullRequestDoesNotExistException |
    InvalidPullRequestIdException |
    PullRequestIdRequiredException |
    TitleRequiredException |
    InvalidTitleException |
    PullRequestAlreadyClosedException;
