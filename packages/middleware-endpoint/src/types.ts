export interface EndpointParameterInstructions {
  [name: string]:
    | BuiltInParamInstruction
    | ClientContextParamInstruction
    | StaticContextParamInstruction
    | ContextParamInstruction;
}

export interface BuiltInParamInstruction {
  type: "builtInParams";
  name: string;
}

export interface ClientContextParamInstruction {
  type: "clientContextParams";
  name: string; // The client resolved config name that has clientContextParams trait
}

export interface StaticContextParamInstruction {
  type: "staticContextParams";
  value: string | boolean;
}

export interface ContextParamInstruction {
  type: "contextParams";
  name: string; // The input structure's member name that has contextParams trait
}
