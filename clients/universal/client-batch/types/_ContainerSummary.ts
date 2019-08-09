/**
 * <p>An object representing summary details of a container within a job.</p>
 */
export interface _ContainerSummary {
  /**
   * <p>The exit code to return upon completion.</p>
   */
  exitCode?: number;

  /**
   * <p>A short (255 max characters) human-readable string to provide additional details about a running or stopped container.</p>
   */
  reason?: string;
}

export type _UnmarshalledContainerSummary = _ContainerSummary;
