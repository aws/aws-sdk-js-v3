import {
  _CodeGenNodeArg,
  _UnmarshalledCodeGenNodeArg
} from "./_CodeGenNodeArg";

/**
 * <p>Represents a node in a directed acyclic graph (DAG)</p>
 */
export interface _CodeGenNode {
  /**
   * <p>A node identifier that is unique within the node's graph.</p>
   */
  Id: string;

  /**
   * <p>The type of node that this is.</p>
   */
  NodeType: string;

  /**
   * <p>Properties of the node, in the form of name-value pairs.</p>
   */
  Args: Array<_CodeGenNodeArg> | Iterable<_CodeGenNodeArg>;

  /**
   * <p>The line number of the node.</p>
   */
  LineNumber?: number;
}

export interface _UnmarshalledCodeGenNode extends _CodeGenNode {
  /**
   * <p>Properties of the node, in the form of name-value pairs.</p>
   */
  Args: Array<_UnmarshalledCodeGenNodeArg>;
}
