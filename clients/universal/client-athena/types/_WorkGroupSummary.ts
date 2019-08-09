/**
 * <p>The summary information for the workgroup, which includes its name, state, description, and the date and time it was created.</p>
 */
export interface _WorkGroupSummary {
  /**
   * <p>The name of the workgroup.</p>
   */
  Name?: string;

  /**
   * <p>The state of the workgroup.</p>
   */
  State?: "ENABLED" | "DISABLED" | string;

  /**
   * <p>The workgroup description.</p>
   */
  Description?: string;

  /**
   * <p>The workgroup creation date and time.</p>
   */
  CreationTime?: Date | string | number;
}

export interface _UnmarshalledWorkGroupSummary extends _WorkGroupSummary {
  /**
   * <p>The workgroup creation date and time.</p>
   */
  CreationTime?: Date;
}
