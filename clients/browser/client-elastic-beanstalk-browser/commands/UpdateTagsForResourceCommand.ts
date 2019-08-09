import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateTagsForResource } from "../model/UpdateTagsForResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateTagsForResourceInput } from "../types/UpdateTagsForResourceInput";
import { UpdateTagsForResourceOutput } from "../types/UpdateTagsForResourceOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/UpdateTagsForResourceInput";
export * from "../types/UpdateTagsForResourceOutput";
export * from "../types/UpdateTagsForResourceExceptionsUnion";

export class UpdateTagsForResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateTagsForResourceInput,
      OutputTypesUnion,
      UpdateTagsForResourceOutput,
      ElasticBeanstalkResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateTagsForResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateTagsForResourceInput,
    UpdateTagsForResourceOutput,
    Blob
  >();

  constructor(readonly input: UpdateTagsForResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateTagsForResourceInput,
    UpdateTagsForResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateTagsForResourceInput, UpdateTagsForResourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
