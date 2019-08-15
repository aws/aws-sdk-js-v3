import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CopyDBParameterGroup } from "../model/operations/CopyDBParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CopyDBParameterGroupInput } from "../types/CopyDBParameterGroupInput";
import { CopyDBParameterGroupOutput } from "../types/CopyDBParameterGroupOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/CopyDBParameterGroupInput";
export * from "../types/CopyDBParameterGroupOutput";
export * from "../types/CopyDBParameterGroupExceptionsUnion";

export class CopyDBParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CopyDBParameterGroupInput,
      OutputTypesUnion,
      CopyDBParameterGroupOutput,
      NeptuneResolvedConfiguration,
      Blob
    > {
  readonly model = CopyDBParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CopyDBParameterGroupInput,
    CopyDBParameterGroupOutput,
    Blob
  >();

  constructor(readonly input: CopyDBParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CopyDBParameterGroupInput,
    CopyDBParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CopyDBParameterGroupInput, CopyDBParameterGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
