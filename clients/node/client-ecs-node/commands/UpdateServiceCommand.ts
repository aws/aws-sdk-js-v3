import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateService } from "../model/UpdateService";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateServiceInput } from "../types/UpdateServiceInput";
import { UpdateServiceOutput } from "../types/UpdateServiceOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/UpdateServiceInput";
export * from "../types/UpdateServiceOutput";
export * from "../types/UpdateServiceExceptionsUnion";

export class UpdateServiceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateServiceInput,
      OutputTypesUnion,
      UpdateServiceOutput,
      ECSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateService;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateServiceInput,
    UpdateServiceOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateServiceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateServiceInput, UpdateServiceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateServiceInput, UpdateServiceOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
