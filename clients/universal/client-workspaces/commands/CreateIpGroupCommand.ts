import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateIpGroup } from "../model/CreateIpGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateIpGroupInput } from "../types/CreateIpGroupInput";
import { CreateIpGroupOutput } from "../types/CreateIpGroupOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/CreateIpGroupInput";
export * from "../types/CreateIpGroupOutput";
export * from "../types/CreateIpGroupExceptionsUnion";

export class CreateIpGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateIpGroupInput,
      OutputTypesUnion,
      CreateIpGroupOutput,
      WorkSpacesResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateIpGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateIpGroupInput,
    CreateIpGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateIpGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateIpGroupInput, CreateIpGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateIpGroupInput, CreateIpGroupOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
