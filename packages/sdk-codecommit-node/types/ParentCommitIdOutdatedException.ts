import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The file could not be added because the provided parent commit ID is not the current tip of the specified branch. To view the full commit ID of the current head of the branch, use <a>GetBranch</a>.</p>
 */
export interface ParentCommitIdOutdatedException extends __ServiceException__<_ParentCommitIdOutdatedExceptionDetails> {
    name: 'ParentCommitIdOutdatedException';
}

export interface _ParentCommitIdOutdatedExceptionDetails {

}