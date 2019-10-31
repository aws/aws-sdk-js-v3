import {
  MiddlewareType,
  SerializeMiddleware,
  FinalizeRequestMiddleware,
  InitializeMiddleware,
  Step,
  DeserializeMiddleware,
  BuildMiddleware,
  Priority
} from "@aws-sdk/types";

export interface MiddlewareEntry<Input extends object, Output extends object> {
  step: Step;
  middleware: MiddlewareType<Input, Output>;
  name: string;
  priority: Priority;
  tags?: Array<string>;
}

export type Relation = "before" | "after";

export interface RelativeMiddlewareEntry<
  Input extends object,
  Output extends object
> {
  step: Step;
  middleware: MiddlewareType<Input, Output>;
  name: string;
  relation: Relation;
  toMiddleware: MiddlewareType<Input, Output> | string;
}

export interface NormalizedRelativeEntry<
  Input extends object,
  Output extends object
> extends RelativeMiddlewareEntry<Input, Output> {
  toMiddlewareNormalized?: string;
}

export interface HandlerRelativeOptions<
  Input extends object,
  Output extends object
> {
  step?: Step;
  tags?: Array<string>;
  relation: "before" | "after";
  toMiddleware: MiddlewareType<Input, Output> | string;
}

export interface SerializeHandlerRelativeOptions<
  Input extends object,
  Output extends object
> extends HandlerRelativeOptions<Input, Output> {
  step: "serialize";
  toMiddleware: SerializeMiddleware<Input, Output> | string;
}

export interface InitializeHandlerRelativeOptions<
  Input extends object,
  Output extends object
> extends HandlerRelativeOptions<Input, Output> {
  step?: "initialize";
  toMiddleware: InitializeMiddleware<Input, Output> | string;
}

export interface BuildHandlerRelativeOptions<
  Input extends object,
  Output extends object
> extends HandlerRelativeOptions<Input, Output> {
  step: "build";
  toMiddleware: BuildMiddleware<Input, Output> | string;
}

export interface FinalizeRequestHandlerRelativeOptions<
  Input extends object,
  Output extends object
> extends HandlerRelativeOptions<Input, Output> {
  step: "finalizeRequest";
  toMiddleware: FinalizeRequestMiddleware<Input, Output> | string;
}

export interface DeserializeHandlerRelativeOptions<
  Input extends object,
  Output extends object
> extends HandlerRelativeOptions<Input, Output> {
  step: "deserialize";
  toMiddleware: DeserializeMiddleware<Input, Output> | string;
}
