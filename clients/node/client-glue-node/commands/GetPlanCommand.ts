import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetPlan } from "../model/operations/GetPlan";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPlanInput } from "../types/GetPlanInput";
import { GetPlanOutput } from "../types/GetPlanOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetPlanInput";
export * from "../types/GetPlanOutput";
export * from "../types/GetPlanExceptionsUnion";

export class GetPlanCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPlanInput,
      OutputTypesUnion,
      GetPlanOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetPlan;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPlanInput,
    GetPlanOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetPlanInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetPlanInput, GetPlanOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPlanInput, GetPlanOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
