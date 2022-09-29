import { EndpointParameterInstructionsSupplier } from "../adaptors";

export interface EndpointTestCase {
  documentation?: string;
  params?: Record<string, boolean | string | unknown>;
  tags?: string[];
  expect: EndpointExpectation | ErrorExpectation;
  operationInputs?: OperationInput[];
}

export type OperationInput = {
  operationName: string;
  operationParams?: Record<string, string | boolean | unknown>;
  builtInParams?: Record<string, string | boolean | unknown>;
  clientParams?: Record<string, string | boolean | unknown>;
};

export type EndpointExpectation = {
  endpoint: {
    url: string;
    properties?: Record<string, unknown>;
    headers?: Record<string, string[]>;
  };
};

export type ErrorExpectation = {
  error: string;
};

export interface ServiceNamespace {
  [Command: string]: EndpointParameterInstructionsSupplier;
}