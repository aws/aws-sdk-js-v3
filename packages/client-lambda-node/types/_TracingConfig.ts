/**
 * <p>The function's AWS X-Ray tracing configuration.</p>
 */
export interface _TracingConfig {
    /**
     * <p>The tracing mode.</p>
     */
    Mode?: 'Active'|'PassThrough'|string;
}

export type _UnmarshalledTracingConfig = _TracingConfig;