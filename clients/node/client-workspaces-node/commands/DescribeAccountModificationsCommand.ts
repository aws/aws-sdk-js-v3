import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAccountModifications } from "../model/DescribeAccountModifications";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAccountModificationsInput } from "../types/DescribeAccountModificationsInput";
import { DescribeAccountModificationsOutput } from "../types/DescribeAccountModificationsOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/DescribeAccountModificationsInput";
export * from "../types/DescribeAccountModificationsOutput";
export * from "../types/DescribeAccountModificationsExceptionsUnion";

export class DescribeAccountModificationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAccountModificationsInput,
      OutputTypesUnion,
      DescribeAccountModificationsOutput,
      WorkSpacesResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAccountModifications;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAccountModificationsInput,
    DescribeAccountModificationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAccountModificationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAccountModificationsInput,
    DescribeAccountModificationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeAccountModificationsInput,
        DescribeAccountModificationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
