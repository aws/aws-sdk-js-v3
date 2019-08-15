import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetAccessKeyInfo } from "../model/operations/GetAccessKeyInfo";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAccessKeyInfoInput } from "../types/GetAccessKeyInfoInput";
import { GetAccessKeyInfoOutput } from "../types/GetAccessKeyInfoOutput";
import { STSResolvedConfiguration } from "../STSConfiguration";
export * from "../types/GetAccessKeyInfoInput";
export * from "../types/GetAccessKeyInfoOutput";
export * from "../types/GetAccessKeyInfoExceptionsUnion";

export class GetAccessKeyInfoCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAccessKeyInfoInput,
      OutputTypesUnion,
      GetAccessKeyInfoOutput,
      STSResolvedConfiguration,
      Blob
    > {
  readonly model = GetAccessKeyInfo;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAccessKeyInfoInput,
    GetAccessKeyInfoOutput,
    Blob
  >();

  constructor(readonly input: GetAccessKeyInfoInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: STSResolvedConfiguration
  ): __aws_sdk_types.Handler<GetAccessKeyInfoInput, GetAccessKeyInfoOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAccessKeyInfoInput, GetAccessKeyInfoOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
