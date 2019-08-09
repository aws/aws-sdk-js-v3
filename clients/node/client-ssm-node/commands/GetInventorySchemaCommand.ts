import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetInventorySchema } from "../model/GetInventorySchema";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetInventorySchemaInput } from "../types/GetInventorySchemaInput";
import { GetInventorySchemaOutput } from "../types/GetInventorySchemaOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/GetInventorySchemaInput";
export * from "../types/GetInventorySchemaOutput";
export * from "../types/GetInventorySchemaExceptionsUnion";

export class GetInventorySchemaCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetInventorySchemaInput,
      OutputTypesUnion,
      GetInventorySchemaOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetInventorySchema;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetInventorySchemaInput,
    GetInventorySchemaOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetInventorySchemaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetInventorySchemaInput,
    GetInventorySchemaOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetInventorySchemaInput, GetInventorySchemaOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
