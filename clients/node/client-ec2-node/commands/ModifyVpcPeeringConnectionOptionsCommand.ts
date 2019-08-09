import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyVpcPeeringConnectionOptions } from "../model/ModifyVpcPeeringConnectionOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyVpcPeeringConnectionOptionsInput } from "../types/ModifyVpcPeeringConnectionOptionsInput";
import { ModifyVpcPeeringConnectionOptionsOutput } from "../types/ModifyVpcPeeringConnectionOptionsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyVpcPeeringConnectionOptionsInput";
export * from "../types/ModifyVpcPeeringConnectionOptionsOutput";
export * from "../types/ModifyVpcPeeringConnectionOptionsExceptionsUnion";

export class ModifyVpcPeeringConnectionOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyVpcPeeringConnectionOptionsInput,
      OutputTypesUnion,
      ModifyVpcPeeringConnectionOptionsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyVpcPeeringConnectionOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyVpcPeeringConnectionOptionsInput,
    ModifyVpcPeeringConnectionOptionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyVpcPeeringConnectionOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyVpcPeeringConnectionOptionsInput,
    ModifyVpcPeeringConnectionOptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifyVpcPeeringConnectionOptionsInput,
        ModifyVpcPeeringConnectionOptionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
