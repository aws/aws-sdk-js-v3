import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetOpsItem } from "../model/operations/GetOpsItem";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetOpsItemInput } from "../types/GetOpsItemInput";
import { GetOpsItemOutput } from "../types/GetOpsItemOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/GetOpsItemInput";
export * from "../types/GetOpsItemOutput";
export * from "../types/GetOpsItemExceptionsUnion";

export class GetOpsItemCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetOpsItemInput,
      OutputTypesUnion,
      GetOpsItemOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetOpsItem;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetOpsItemInput,
    GetOpsItemOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetOpsItemInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<GetOpsItemInput, GetOpsItemOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetOpsItemInput, GetOpsItemOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
