import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The divergence between the tips of the provided commit specifiers is too great to determine whether there might be any merge conflicts. Locally compare the specifiers using <code>git diff</code> or a diff tool.</p>
 */
export interface TipsDivergenceExceededException extends __ServiceException__<_TipsDivergenceExceededExceptionDetails> {
    name: 'TipsDivergenceExceededException';
}

export interface _TipsDivergenceExceededExceptionDetails {

}