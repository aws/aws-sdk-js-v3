import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDedicatedIpPool } from "../model/operations/CreateDedicatedIpPool";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDedicatedIpPoolInput } from "../types/CreateDedicatedIpPoolInput";
import { CreateDedicatedIpPoolOutput } from "../types/CreateDedicatedIpPoolOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/CreateDedicatedIpPoolInput";
export * from "../types/CreateDedicatedIpPoolOutput";
export * from "../types/CreateDedicatedIpPoolExceptionsUnion";

export class CreateDedicatedIpPoolCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDedicatedIpPoolInput,
      OutputTypesUnion,
      CreateDedicatedIpPoolOutput,
      PinpointEmailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDedicatedIpPool;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDedicatedIpPoolInput,
    CreateDedicatedIpPoolOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDedicatedIpPoolInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDedicatedIpPoolInput,
    CreateDedicatedIpPoolOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDedicatedIpPoolInput, CreateDedicatedIpPoolOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
