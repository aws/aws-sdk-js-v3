import {
  _CodeGenNodeArg,
  _UnmarshalledCodeGenNodeArg
} from "./_CodeGenNodeArg";

/**
 * <p>The location of resources.</p>
 */
export interface _Location {
  /**
   * <p>A JDBC location.</p>
   */
  Jdbc?: Array<_CodeGenNodeArg> | Iterable<_CodeGenNodeArg>;

  /**
   * <p>An Amazon Simple Storage Service (Amazon S3) location.</p>
   */
  S3?: Array<_CodeGenNodeArg> | Iterable<_CodeGenNodeArg>;

  /**
   * <p>An Amazon DynamoDB table location.</p>
   */
  DynamoDB?: Array<_CodeGenNodeArg> | Iterable<_CodeGenNodeArg>;
}

export interface _UnmarshalledLocation extends _Location {
  /**
   * <p>A JDBC location.</p>
   */
  Jdbc?: Array<_UnmarshalledCodeGenNodeArg>;

  /**
   * <p>An Amazon Simple Storage Service (Amazon S3) location.</p>
   */
  S3?: Array<_UnmarshalledCodeGenNodeArg>;

  /**
   * <p>An Amazon DynamoDB table location.</p>
   */
  DynamoDB?: Array<_UnmarshalledCodeGenNodeArg>;
}
