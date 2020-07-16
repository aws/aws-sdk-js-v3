import { HandlerOptions, MiddlewareType, Priority, Step } from "@aws-sdk/types";
export interface MiddlewareEntry<Input extends object, Output extends object> extends HandlerOptions {
  step: Step;
  middleware: MiddlewareType<Input, Output>;
  priority: Priority;
}

export interface RelativeMiddlewareEntry<Input extends object, Output extends object> extends HandlerOptions {
  step: Step;
  middleware: MiddlewareType<Input, Output>;
  next?: string;
  prev?: string;
}

export interface NormalizedRelativeEntry<Input extends object, Output extends object> extends HandlerOptions {
  step: Step;
  middleware: MiddlewareType<Input, Output>;
  next?: NormalizedRelativeEntry<Input, Output>;
  prev?: NormalizedRelativeEntry<Input, Output>;
  priority: null;
}

export type NamedMiddlewareEntriesMap<Input extends object, Output extends object> = {
  [key: string]: MiddlewareEntry<Input, Output>;
};

export type NamedRelativeEntriesMap<Input extends object, Output extends object> = {
  [key: string]: NormalizedRelativeEntry<Input, Output>;
};

export type RelativeMiddlewareAnchor<Input extends object, Output extends object> = {
  [name: string]: {
    prev?: NormalizedRelativeEntry<Input, Output>;
    next?: NormalizedRelativeEntry<Input, Output>;
  };
};

export type NormalizingEntryResult<Input extends object, Output extends object> = [
  Array<NormalizedRelativeEntry<Input, Output>>,
  RelativeMiddlewareAnchor<Input, Output>
];
