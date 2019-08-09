/**
 * <p>An argument or property of a node.</p>
 */
export interface _CodeGenNodeArg {
  /**
   * <p>The name of the argument or property.</p>
   */
  Name: string;

  /**
   * <p>The value of the argument or property.</p>
   */
  Value: string;

  /**
   * <p>True if the value is used as a parameter.</p>
   */
  Param?: boolean;
}

export type _UnmarshalledCodeGenNodeArg = _CodeGenNodeArg;
