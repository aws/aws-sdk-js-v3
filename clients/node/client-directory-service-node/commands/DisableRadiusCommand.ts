import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisableRadius } from "../model/operations/DisableRadius";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableRadiusInput } from "../types/DisableRadiusInput";
import { DisableRadiusOutput } from "../types/DisableRadiusOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/DisableRadiusInput";
export * from "../types/DisableRadiusOutput";
export * from "../types/DisableRadiusExceptionsUnion";

export class DisableRadiusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableRadiusInput,
      OutputTypesUnion,
      DisableRadiusOutput,
      DirectoryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisableRadius;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableRadiusInput,
    DisableRadiusOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisableRadiusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<DisableRadiusInput, DisableRadiusOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisableRadiusInput, DisableRadiusOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
