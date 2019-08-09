import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateDomainEntry } from "../model/UpdateDomainEntry";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDomainEntryInput } from "../types/UpdateDomainEntryInput";
import { UpdateDomainEntryOutput } from "../types/UpdateDomainEntryOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/UpdateDomainEntryInput";
export * from "../types/UpdateDomainEntryOutput";
export * from "../types/UpdateDomainEntryExceptionsUnion";

export class UpdateDomainEntryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDomainEntryInput,
      OutputTypesUnion,
      UpdateDomainEntryOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateDomainEntry;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDomainEntryInput,
    UpdateDomainEntryOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateDomainEntryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateDomainEntryInput, UpdateDomainEntryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDomainEntryInput, UpdateDomainEntryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
