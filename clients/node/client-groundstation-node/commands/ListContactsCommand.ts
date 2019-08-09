import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListContacts } from "../model/ListContacts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListContactsInput } from "../types/ListContactsInput";
import { ListContactsOutput } from "../types/ListContactsOutput";
import { GroundStationResolvedConfiguration } from "../GroundStationConfiguration";
export * from "../types/ListContactsInput";
export * from "../types/ListContactsOutput";
export * from "../types/ListContactsExceptionsUnion";

export class ListContactsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListContactsInput,
      OutputTypesUnion,
      ListContactsOutput,
      GroundStationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListContacts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListContactsInput,
    ListContactsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListContactsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GroundStationResolvedConfiguration
  ): __aws_sdk_types.Handler<ListContactsInput, ListContactsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListContactsInput, ListContactsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
