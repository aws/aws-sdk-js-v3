import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateWebACL } from "../model/CreateWebACL";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateWebACLInput } from "../types/CreateWebACLInput";
import { CreateWebACLOutput } from "../types/CreateWebACLOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/CreateWebACLInput";
export * from "../types/CreateWebACLOutput";
export * from "../types/CreateWebACLExceptionsUnion";

export class CreateWebACLCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateWebACLInput,
      OutputTypesUnion,
      CreateWebACLOutput,
      WAFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateWebACL;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateWebACLInput,
    CreateWebACLOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateWebACLInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateWebACLInput, CreateWebACLOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateWebACLInput, CreateWebACLOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
