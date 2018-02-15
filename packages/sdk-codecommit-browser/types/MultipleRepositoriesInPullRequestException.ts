import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>You cannot include more than one repository in a pull request. Make sure you have specified only one repository name in your request, and then try again.</p>
 */
export interface MultipleRepositoriesInPullRequestException extends __ServiceException__<_MultipleRepositoriesInPullRequestExceptionDetails> {
    name: 'MultipleRepositoriesInPullRequestException';
}

export interface _MultipleRepositoriesInPullRequestExceptionDetails {

}