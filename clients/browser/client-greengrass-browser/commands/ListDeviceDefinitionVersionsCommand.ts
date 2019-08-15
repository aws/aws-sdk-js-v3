import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDeviceDefinitionVersions } from "../model/operations/ListDeviceDefinitionVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDeviceDefinitionVersionsInput } from "../types/ListDeviceDefinitionVersionsInput";
import { ListDeviceDefinitionVersionsOutput } from "../types/ListDeviceDefinitionVersionsOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/ListDeviceDefinitionVersionsInput";
export * from "../types/ListDeviceDefinitionVersionsOutput";
export * from "../types/ListDeviceDefinitionVersionsExceptionsUnion";

export class ListDeviceDefinitionVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDeviceDefinitionVersionsInput,
      OutputTypesUnion,
      ListDeviceDefinitionVersionsOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = ListDeviceDefinitionVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDeviceDefinitionVersionsInput,
    ListDeviceDefinitionVersionsOutput,
    Blob
  >();

  constructor(readonly input: ListDeviceDefinitionVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDeviceDefinitionVersionsInput,
    ListDeviceDefinitionVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListDeviceDefinitionVersionsInput,
        ListDeviceDefinitionVersionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
