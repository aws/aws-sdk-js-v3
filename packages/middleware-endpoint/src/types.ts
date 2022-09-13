export interface EndpointParameterInstruction {
  [name: string]:
    | BuiltInParamInstruction
    | ClientContextParamInstruction
    | StaticContextParamInstruction
    | ContextParamInstruction;
}

interface BuiltInParamInstruction {
  type: "builtInParams";
  name: string;
}

interface ClientContextParamInstruction {
  type: "clientContextParams";
  name: string; // The client resolved config name that has clientContextParams trait
}

interface StaticContextParamInstruction {
  type: "staticContextParams";
  value: string | boolean;
}

interface ContextParamInstruction {
  type: "contextParams";
  name: string; // The input structure's member name that has contextParams trait
}
