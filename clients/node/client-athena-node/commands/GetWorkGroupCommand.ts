import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetWorkGroup } from "../model/GetWorkGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetWorkGroupInput } from "../types/GetWorkGroupInput";
import { GetWorkGroupOutput } from "../types/GetWorkGroupOutput";
import { AthenaResolvedConfiguration } from "../AthenaConfiguration";
export * from "../types/GetWorkGroupInput";
export * from "../types/GetWorkGroupOutput";
export * from "../types/GetWorkGroupExceptionsUnion";

export class GetWorkGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetWorkGroupInput,
      OutputTypesUnion,
      GetWorkGroupOutput,
      AthenaResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetWorkGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetWorkGroupInput,
    GetWorkGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetWorkGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AthenaResolvedConfiguration
  ): __aws_sdk_types.Handler<GetWorkGroupInput, GetWorkGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetWorkGroupInput, GetWorkGroupOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
