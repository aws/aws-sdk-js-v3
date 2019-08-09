import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListPlatformApplications } from "../model/ListPlatformApplications";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPlatformApplicationsInput } from "../types/ListPlatformApplicationsInput";
import { ListPlatformApplicationsOutput } from "../types/ListPlatformApplicationsOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/ListPlatformApplicationsInput";
export * from "../types/ListPlatformApplicationsOutput";
export * from "../types/ListPlatformApplicationsExceptionsUnion";

export class ListPlatformApplicationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPlatformApplicationsInput,
      OutputTypesUnion,
      ListPlatformApplicationsOutput,
      SNSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListPlatformApplications;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPlatformApplicationsInput,
    ListPlatformApplicationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListPlatformApplicationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListPlatformApplicationsInput,
    ListPlatformApplicationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPlatformApplicationsInput, ListPlatformApplicationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
