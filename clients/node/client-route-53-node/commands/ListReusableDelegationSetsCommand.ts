import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListReusableDelegationSets } from "../model/operations/ListReusableDelegationSets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListReusableDelegationSetsInput } from "../types/ListReusableDelegationSetsInput";
import { ListReusableDelegationSetsOutput } from "../types/ListReusableDelegationSetsOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/ListReusableDelegationSetsInput";
export * from "../types/ListReusableDelegationSetsOutput";
export * from "../types/ListReusableDelegationSetsExceptionsUnion";

export class ListReusableDelegationSetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListReusableDelegationSetsInput,
      OutputTypesUnion,
      ListReusableDelegationSetsOutput,
      Route53ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListReusableDelegationSets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListReusableDelegationSetsInput,
    ListReusableDelegationSetsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListReusableDelegationSetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListReusableDelegationSetsInput,
    ListReusableDelegationSetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListReusableDelegationSetsInput,
        ListReusableDelegationSetsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
