import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CopyDBClusterParameterGroup } from "../model/CopyDBClusterParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CopyDBClusterParameterGroupInput } from "../types/CopyDBClusterParameterGroupInput";
import { CopyDBClusterParameterGroupOutput } from "../types/CopyDBClusterParameterGroupOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/CopyDBClusterParameterGroupInput";
export * from "../types/CopyDBClusterParameterGroupOutput";
export * from "../types/CopyDBClusterParameterGroupExceptionsUnion";

export class CopyDBClusterParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CopyDBClusterParameterGroupInput,
      OutputTypesUnion,
      CopyDBClusterParameterGroupOutput,
      NeptuneResolvedConfiguration,
      Blob
    > {
  readonly model = CopyDBClusterParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CopyDBClusterParameterGroupInput,
    CopyDBClusterParameterGroupOutput,
    Blob
  >();

  constructor(readonly input: CopyDBClusterParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CopyDBClusterParameterGroupInput,
    CopyDBClusterParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CopyDBClusterParameterGroupInput,
        CopyDBClusterParameterGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
