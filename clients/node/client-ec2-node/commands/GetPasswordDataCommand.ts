import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetPasswordData } from "../model/GetPasswordData";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPasswordDataInput } from "../types/GetPasswordDataInput";
import { GetPasswordDataOutput } from "../types/GetPasswordDataOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/GetPasswordDataInput";
export * from "../types/GetPasswordDataOutput";
export * from "../types/GetPasswordDataExceptionsUnion";

export class GetPasswordDataCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPasswordDataInput,
      OutputTypesUnion,
      GetPasswordDataOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetPasswordData;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPasswordDataInput,
    GetPasswordDataOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetPasswordDataInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetPasswordDataInput, GetPasswordDataOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPasswordDataInput, GetPasswordDataOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
