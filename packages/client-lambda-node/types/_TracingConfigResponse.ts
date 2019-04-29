/**
 * <p>The function's AWS X-Ray tracing configuration.</p>
 */
export interface _TracingConfigResponse {
  /**
   * <p>The tracing mode.</p>
   */
  Mode?: "Active" | "PassThrough" | string;
}

export type _UnmarshalledTracingConfigResponse = _TracingConfigResponse;
