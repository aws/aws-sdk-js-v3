import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The provided developer user identifier is already registered with Cognito under a different identity ID.</p>
 */
export interface DeveloperUserAlreadyRegisteredException extends __ServiceException__<_DeveloperUserAlreadyRegisteredExceptionDetails> {
    name: 'DeveloperUserAlreadyRegisteredException';
}

export interface _DeveloperUserAlreadyRegisteredExceptionDetails {
    /**
     * <p>This developer user identifier is already registered with Cognito.</p>
     */
    message?: string;
}