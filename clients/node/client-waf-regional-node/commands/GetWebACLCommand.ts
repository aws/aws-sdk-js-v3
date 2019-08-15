import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetWebACL } from "../model/operations/GetWebACL";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetWebACLInput } from "../types/GetWebACLInput";
import { GetWebACLOutput } from "../types/GetWebACLOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/GetWebACLInput";
export * from "../types/GetWebACLOutput";
export * from "../types/GetWebACLExceptionsUnion";

export class GetWebACLCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetWebACLInput,
      OutputTypesUnion,
      GetWebACLOutput,
      WAFRegionalResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetWebACL;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetWebACLInput,
    GetWebACLOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetWebACLInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<GetWebACLInput, GetWebACLOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetWebACLInput, GetWebACLOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
