import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CopyDBParameterGroup } from "../model/operations/CopyDBParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CopyDBParameterGroupInput } from "../types/CopyDBParameterGroupInput";
import { CopyDBParameterGroupOutput } from "../types/CopyDBParameterGroupOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
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
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CopyDBParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CopyDBParameterGroupInput,
    CopyDBParameterGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CopyDBParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
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
