import {
  _FunctionDefaultConfig,
  _UnmarshalledFunctionDefaultConfig
} from "./_FunctionDefaultConfig";
import { _Function, _UnmarshalledFunction } from "./_Function";

/**
 * Information about a function definition version.
 */
export interface _FunctionDefinitionVersion {
  /**
   * The default configuration that applies to all Lambda functions in this function definition version. Individual Lambda functions can override these settings.
   */
  DefaultConfig?: _FunctionDefaultConfig;

  /**
   * A list of Lambda functions in this function definition version.
   */
  Functions?: Array<_Function> | Iterable<_Function>;
}

export interface _UnmarshalledFunctionDefinitionVersion
  extends _FunctionDefinitionVersion {
  /**
   * The default configuration that applies to all Lambda functions in this function definition version. Individual Lambda functions can override these settings.
   */
  DefaultConfig?: _UnmarshalledFunctionDefaultConfig;

  /**
   * A list of Lambda functions in this function definition version.
   */
  Functions?: Array<_UnmarshalledFunction>;
}
