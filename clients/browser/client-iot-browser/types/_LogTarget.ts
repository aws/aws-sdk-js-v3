/**
 * <p>A log target.</p>
 */
export interface _LogTarget {
  /**
   * <p>The target type.</p>
   */
  targetType: "DEFAULT" | "THING_GROUP" | string;

  /**
   * <p>The target name.</p>
   */
  targetName?: string;
}

export type _UnmarshalledLogTarget = _LogTarget;
