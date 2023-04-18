/**
 * @internal
 */
export interface EndpointParameterInstructions {
  [name: string]:
    | BuiltInParamInstruction
    | ClientContextParamInstruction
    | StaticContextParamInstruction
    | ContextParamInstruction;
}

/**
 * @internal
 */
export interface BuiltInParamInstruction {
  type: "builtInParams";
  name: string;
}

/**
 * @internal
 */
export interface ClientContextParamInstruction {
  type: "clientContextParams";
  name: string; // The client resolved config name that has clientContextParams trait
}

/**
 * @internal
 */
export interface StaticContextParamInstruction {
  type: "staticContextParams";
  value: string | boolean;
}

/**
 * @internal
 */
export interface ContextParamInstruction {
  type: "contextParams";
  name: string; // The input structure's member name that has contextParams trait
}
