import { _ResourceUri, _UnmarshalledResourceUri } from "./_ResourceUri";

/**
 * <p>A structure used to create or updata a user-defined function.</p>
 */
export interface _UserDefinedFunctionInput {
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
   * <p>The resource URIs for the function.</p>
   */
  ResourceUris?: Array<_ResourceUri> | Iterable<_ResourceUri>;
}

export interface _UnmarshalledUserDefinedFunctionInput
  extends _UserDefinedFunctionInput {
  /**
   * <p>The resource URIs for the function.</p>
   */
  ResourceUris?: Array<_UnmarshalledResourceUri>;
}
