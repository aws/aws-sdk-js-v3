import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeProductAsAdmin } from "../model/DescribeProductAsAdmin";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeProductAsAdminInput } from "../types/DescribeProductAsAdminInput";
import { DescribeProductAsAdminOutput } from "../types/DescribeProductAsAdminOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DescribeProductAsAdminInput";
export * from "../types/DescribeProductAsAdminOutput";
export * from "../types/DescribeProductAsAdminExceptionsUnion";

export class DescribeProductAsAdminCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeProductAsAdminInput,
      OutputTypesUnion,
      DescribeProductAsAdminOutput,
      ServiceCatalogResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeProductAsAdmin;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeProductAsAdminInput,
    DescribeProductAsAdminOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeProductAsAdminInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeProductAsAdminInput,
    DescribeProductAsAdminOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeProductAsAdminInput, DescribeProductAsAdminOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
