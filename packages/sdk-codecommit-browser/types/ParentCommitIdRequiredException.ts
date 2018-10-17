import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>A parent commit ID is required. To view the full commit ID of a branch in a repository, use <a>GetBranch</a> or a Git command (for example, git pull or git log).</p>
 */
export interface ParentCommitIdRequiredException extends __ServiceException__<_ParentCommitIdRequiredExceptionDetails> {
    name: 'ParentCommitIdRequiredException';
}

export interface _ParentCommitIdRequiredExceptionDetails {

}