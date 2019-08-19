import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateApplicationVersion } from "../model/operations/UpdateApplicationVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateApplicationVersionInput } from "../types/UpdateApplicationVersionInput";
import { UpdateApplicationVersionOutput } from "../types/UpdateApplicationVersionOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/UpdateApplicationVersionInput";
export * from "../types/UpdateApplicationVersionOutput";
export * from "../types/UpdateApplicationVersionExceptionsUnion";

export class UpdateApplicationVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateApplicationVersionInput,
      OutputTypesUnion,
      UpdateApplicationVersionOutput,
      ElasticBeanstalkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateApplicationVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateApplicationVersionInput,
    UpdateApplicationVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateApplicationVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateApplicationVersionInput,
    UpdateApplicationVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateApplicationVersionInput, UpdateApplicationVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
