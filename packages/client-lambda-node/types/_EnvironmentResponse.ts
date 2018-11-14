import {_EnvironmentError, _UnmarshalledEnvironmentError} from './_EnvironmentError';

/**
 * <p>The results of a configuration update that applied environment variables.</p>
 */
export interface _EnvironmentResponse {
    /**
     * <p>Environment variable key-value pairs.</p>
     */
    Variables?: {[key: string]: string}|Iterable<[string, string]>;

    /**
     * <p>Error messages for environment variables that could not be applied.</p>
     */
    Error?: _EnvironmentError;
}

export interface _UnmarshalledEnvironmentResponse extends _EnvironmentResponse {
    /**
     * <p>Environment variable key-value pairs.</p>
     */
    Variables?: {[key: string]: string};

    /**
     * <p>Error messages for environment variables that could not be applied.</p>
     */
    Error?: _UnmarshalledEnvironmentError;
}