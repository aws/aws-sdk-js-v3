import { _UserDefinedFunctionInput } from "./_UserDefinedFunctionInput";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateUserDefinedFunctionInput shape
 */
export interface CreateUserDefinedFunctionInput {
  /**
   * <p>The ID of the Data Catalog in which to create the function. If none is supplied, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database in which to create the function.</p>
   */
  DatabaseName: string;

  /**
   * <p>A <code>FunctionInput</code> object that defines the function to create in the Data Catalog.</p>
   */
  FunctionInput: _UserDefinedFunctionInput;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
