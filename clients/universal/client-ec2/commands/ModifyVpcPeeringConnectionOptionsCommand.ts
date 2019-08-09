import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
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
      Uint8Array
    > {
  readonly model = ModifyVpcPeeringConnectionOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyVpcPeeringConnectionOptionsInput,
    ModifyVpcPeeringConnectionOptionsOutput,
    Uint8Array
  >();

  constructor(readonly input: ModifyVpcPeeringConnectionOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
