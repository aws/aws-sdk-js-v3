import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateInputSecurityGroup } from "../model/CreateInputSecurityGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateInputSecurityGroupInput } from "../types/CreateInputSecurityGroupInput";
import { CreateInputSecurityGroupOutput } from "../types/CreateInputSecurityGroupOutput";
import { MediaLiveResolvedConfiguration } from "../MediaLiveConfiguration";
export * from "../types/CreateInputSecurityGroupInput";
export * from "../types/CreateInputSecurityGroupOutput";
export * from "../types/CreateInputSecurityGroupExceptionsUnion";

export class CreateInputSecurityGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateInputSecurityGroupInput,
      OutputTypesUnion,
      CreateInputSecurityGroupOutput,
      MediaLiveResolvedConfiguration,
      Blob
    > {
  readonly model = CreateInputSecurityGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateInputSecurityGroupInput,
    CreateInputSecurityGroupOutput,
    Blob
  >();

  constructor(readonly input: CreateInputSecurityGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaLiveResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateInputSecurityGroupInput,
    CreateInputSecurityGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateInputSecurityGroupInput, CreateInputSecurityGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
