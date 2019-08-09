import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteUsagePlan } from "../model/DeleteUsagePlan";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteUsagePlanInput } from "../types/DeleteUsagePlanInput";
import { DeleteUsagePlanOutput } from "../types/DeleteUsagePlanOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/DeleteUsagePlanInput";
export * from "../types/DeleteUsagePlanOutput";
export * from "../types/DeleteUsagePlanExceptionsUnion";

export class DeleteUsagePlanCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteUsagePlanInput,
      OutputTypesUnion,
      DeleteUsagePlanOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteUsagePlan;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteUsagePlanInput,
    DeleteUsagePlanOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteUsagePlanInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteUsagePlanInput, DeleteUsagePlanOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteUsagePlanInput, DeleteUsagePlanOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
