import { _ResourceUri, _UnmarshalledResourceUri } from "./_ResourceUri";

/**
 * <p>Represents the equivalent of a Hive user-defined function (<code>UDF</code>) definition.</p>
 */
export interface _UserDefinedFunction {
  /**
   * <p>The name of the function.</p>
   */
  FunctionName?: string;

  /**
   * <p>The Java class that contains the function code.</p>
   */
  ClassName?: string;

  /**
   * <p>The owner of the function.</p>
   */
  OwnerName?: string;

  /**
   * <p>The owner type.</p>
   */
  OwnerType?: "USER" | "ROLE" | "GROUP" | string;

  /**
   * <p>The time at which the function was created.</p>
   */
  CreateTime?: Date | string | number;

  /**
   * <p>The resource URIs for the function.</p>
   */
  ResourceUris?: Array<_ResourceUri> | Iterable<_ResourceUri>;
}

export interface _UnmarshalledUserDefinedFunction extends _UserDefinedFunction {
  /**
   * <p>The time at which the function was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The resource URIs for the function.</p>
   */
  ResourceUris?: Array<_UnmarshalledResourceUri>;
}
