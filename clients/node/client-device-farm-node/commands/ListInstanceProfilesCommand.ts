import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListInstanceProfiles } from "../model/ListInstanceProfiles";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListInstanceProfilesInput } from "../types/ListInstanceProfilesInput";
import { ListInstanceProfilesOutput } from "../types/ListInstanceProfilesOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/ListInstanceProfilesInput";
export * from "../types/ListInstanceProfilesOutput";
export * from "../types/ListInstanceProfilesExceptionsUnion";

export class ListInstanceProfilesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListInstanceProfilesInput,
      OutputTypesUnion,
      ListInstanceProfilesOutput,
      DeviceFarmResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListInstanceProfiles;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListInstanceProfilesInput,
    ListInstanceProfilesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListInstanceProfilesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListInstanceProfilesInput,
    ListInstanceProfilesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListInstanceProfilesInput, ListInstanceProfilesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
