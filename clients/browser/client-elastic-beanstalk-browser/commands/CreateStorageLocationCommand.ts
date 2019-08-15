import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateStorageLocation } from "../model/operations/CreateStorageLocation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateStorageLocationInput } from "../types/CreateStorageLocationInput";
import { CreateStorageLocationOutput } from "../types/CreateStorageLocationOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/CreateStorageLocationInput";
export * from "../types/CreateStorageLocationOutput";
export * from "../types/CreateStorageLocationExceptionsUnion";

export class CreateStorageLocationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateStorageLocationInput,
      OutputTypesUnion,
      CreateStorageLocationOutput,
      ElasticBeanstalkResolvedConfiguration,
      Blob
    > {
  readonly model = CreateStorageLocation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateStorageLocationInput,
    CreateStorageLocationOutput,
    Blob
  >();

  constructor(readonly input: CreateStorageLocationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateStorageLocationInput,
    CreateStorageLocationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateStorageLocationInput, CreateStorageLocationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
