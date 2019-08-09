import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyClusterSubnetGroup } from "../model/ModifyClusterSubnetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyClusterSubnetGroupInput } from "../types/ModifyClusterSubnetGroupInput";
import { ModifyClusterSubnetGroupOutput } from "../types/ModifyClusterSubnetGroupOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/ModifyClusterSubnetGroupInput";
export * from "../types/ModifyClusterSubnetGroupOutput";
export * from "../types/ModifyClusterSubnetGroupExceptionsUnion";

export class ModifyClusterSubnetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyClusterSubnetGroupInput,
      OutputTypesUnion,
      ModifyClusterSubnetGroupOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyClusterSubnetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyClusterSubnetGroupInput,
    ModifyClusterSubnetGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyClusterSubnetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyClusterSubnetGroupInput,
    ModifyClusterSubnetGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyClusterSubnetGroupInput, ModifyClusterSubnetGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
