import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The specified reference name format is not valid. Reference names must conform to the Git references format, for example refs/heads/master. For more information, see <a href="https://git-scm.com/book/en/v2/Git-Internals-Git-References">Git Internals - Git References</a> or consult your Git documentation.</p>
 */
export interface InvalidReferenceNameException extends __ServiceException__<_InvalidReferenceNameExceptionDetails> {
    name: 'InvalidReferenceNameException';
}

export interface _InvalidReferenceNameExceptionDetails {

}