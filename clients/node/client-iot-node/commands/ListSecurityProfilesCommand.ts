import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListSecurityProfiles } from "../model/operations/ListSecurityProfiles";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSecurityProfilesInput } from "../types/ListSecurityProfilesInput";
import { ListSecurityProfilesOutput } from "../types/ListSecurityProfilesOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListSecurityProfilesInput";
export * from "../types/ListSecurityProfilesOutput";
export * from "../types/ListSecurityProfilesExceptionsUnion";

export class ListSecurityProfilesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSecurityProfilesInput,
      OutputTypesUnion,
      ListSecurityProfilesOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListSecurityProfiles;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSecurityProfilesInput,
    ListSecurityProfilesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListSecurityProfilesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSecurityProfilesInput,
    ListSecurityProfilesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSecurityProfilesInput, ListSecurityProfilesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
