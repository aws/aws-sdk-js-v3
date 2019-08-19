/**
 * <p>The <code>Export</code> structure describes the exported output values for a stack.</p>
 */
export interface _Export {
  /**
   * <p>The stack that contains the exported output name and value.</p>
   */
  ExportingStackId?: string;

  /**
   * <p>The name of exported output value. Use this name and the <code>Fn::ImportValue</code> function to import the associated value into other stacks. The name is defined in the <code>Export</code> field in the associated stack's <code>Outputs</code> section.</p>
   */
  Name?: string;

  /**
   * <p>The value of the exported output, such as a resource physical ID. This value is defined in the <code>Export</code> field in the associated stack's <code>Outputs</code> section.</p>
   */
  Value?: string;
}

export type _UnmarshalledExport = _Export;
