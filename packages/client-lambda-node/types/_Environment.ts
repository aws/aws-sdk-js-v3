/**
 * <p>A function's environment variable settings.</p>
 */
export interface _Environment {
    /**
     * <p>Environment variable key-value pairs.</p>
     */
    Variables?: {[key: string]: string}|Iterable<[string, string]>;
}

export interface _UnmarshalledEnvironment extends _Environment {
    /**
     * <p>Environment variable key-value pairs.</p>
     */
    Variables?: {[key: string]: string};
}