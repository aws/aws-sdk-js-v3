import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyVpcTenancy } from "../model/ModifyVpcTenancy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyVpcTenancyInput } from "../types/ModifyVpcTenancyInput";
import { ModifyVpcTenancyOutput } from "../types/ModifyVpcTenancyOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyVpcTenancyInput";
export * from "../types/ModifyVpcTenancyOutput";
export * from "../types/ModifyVpcTenancyExceptionsUnion";

export class ModifyVpcTenancyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyVpcTenancyInput,
      OutputTypesUnion,
      ModifyVpcTenancyOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyVpcTenancy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyVpcTenancyInput,
    ModifyVpcTenancyOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyVpcTenancyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<ModifyVpcTenancyInput, ModifyVpcTenancyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyVpcTenancyInput, ModifyVpcTenancyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
