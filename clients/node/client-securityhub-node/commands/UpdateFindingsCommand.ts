import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateFindings } from "../model/UpdateFindings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateFindingsInput } from "../types/UpdateFindingsInput";
import { UpdateFindingsOutput } from "../types/UpdateFindingsOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/UpdateFindingsInput";
export * from "../types/UpdateFindingsOutput";
export * from "../types/UpdateFindingsExceptionsUnion";

export class UpdateFindingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateFindingsInput,
      OutputTypesUnion,
      UpdateFindingsOutput,
      SecurityHubResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateFindings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFindingsInput,
    UpdateFindingsOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateFindingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateFindingsInput, UpdateFindingsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateFindingsInput, UpdateFindingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
