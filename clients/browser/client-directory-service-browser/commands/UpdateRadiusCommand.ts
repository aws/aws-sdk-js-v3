import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateRadius } from "../model/operations/UpdateRadius";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRadiusInput } from "../types/UpdateRadiusInput";
import { UpdateRadiusOutput } from "../types/UpdateRadiusOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/UpdateRadiusInput";
export * from "../types/UpdateRadiusOutput";
export * from "../types/UpdateRadiusExceptionsUnion";

export class UpdateRadiusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRadiusInput,
      OutputTypesUnion,
      UpdateRadiusOutput,
      DirectoryServiceResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateRadius;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRadiusInput,
    UpdateRadiusOutput,
    Blob
  >();

  constructor(readonly input: UpdateRadiusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateRadiusInput, UpdateRadiusOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateRadiusInput, UpdateRadiusOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
