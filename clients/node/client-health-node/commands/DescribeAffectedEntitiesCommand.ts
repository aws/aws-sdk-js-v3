import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAffectedEntities } from "../model/DescribeAffectedEntities";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAffectedEntitiesInput } from "../types/DescribeAffectedEntitiesInput";
import { DescribeAffectedEntitiesOutput } from "../types/DescribeAffectedEntitiesOutput";
import { HealthResolvedConfiguration } from "../HealthConfiguration";
export * from "../types/DescribeAffectedEntitiesInput";
export * from "../types/DescribeAffectedEntitiesOutput";
export * from "../types/DescribeAffectedEntitiesExceptionsUnion";

export class DescribeAffectedEntitiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAffectedEntitiesInput,
      OutputTypesUnion,
      DescribeAffectedEntitiesOutput,
      HealthResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAffectedEntities;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAffectedEntitiesInput,
    DescribeAffectedEntitiesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAffectedEntitiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: HealthResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAffectedEntitiesInput,
    DescribeAffectedEntitiesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAffectedEntitiesInput, DescribeAffectedEntitiesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
