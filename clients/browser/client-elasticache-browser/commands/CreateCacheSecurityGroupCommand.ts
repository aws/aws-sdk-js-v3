import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateCacheSecurityGroup } from "../model/CreateCacheSecurityGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCacheSecurityGroupInput } from "../types/CreateCacheSecurityGroupInput";
import { CreateCacheSecurityGroupOutput } from "../types/CreateCacheSecurityGroupOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/CreateCacheSecurityGroupInput";
export * from "../types/CreateCacheSecurityGroupOutput";
export * from "../types/CreateCacheSecurityGroupExceptionsUnion";

export class CreateCacheSecurityGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCacheSecurityGroupInput,
      OutputTypesUnion,
      CreateCacheSecurityGroupOutput,
      ElastiCacheResolvedConfiguration,
      Blob
    > {
  readonly model = CreateCacheSecurityGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCacheSecurityGroupInput,
    CreateCacheSecurityGroupOutput,
    Blob
  >();

  constructor(readonly input: CreateCacheSecurityGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateCacheSecurityGroupInput,
    CreateCacheSecurityGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateCacheSecurityGroupInput, CreateCacheSecurityGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
