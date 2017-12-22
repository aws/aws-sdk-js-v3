import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The destination commit specifier is not valid. You must provide a valid branch name, tag, or full commit ID. </p>
 */
export interface InvalidDestinationCommitSpecifierException extends __ServiceException__<_InvalidDestinationCommitSpecifierExceptionDetails> {
    name: 'InvalidDestinationCommitSpecifierException';
}

export interface _InvalidDestinationCommitSpecifierExceptionDetails {

}