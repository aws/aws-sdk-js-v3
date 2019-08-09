import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { EnableRadius } from "../model/EnableRadius";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableRadiusInput } from "../types/EnableRadiusInput";
import { EnableRadiusOutput } from "../types/EnableRadiusOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/EnableRadiusInput";
export * from "../types/EnableRadiusOutput";
export * from "../types/EnableRadiusExceptionsUnion";

export class EnableRadiusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableRadiusInput,
      OutputTypesUnion,
      EnableRadiusOutput,
      DirectoryServiceResolvedConfiguration,
      Blob
    > {
  readonly model = EnableRadius;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableRadiusInput,
    EnableRadiusOutput,
    Blob
  >();

  constructor(readonly input: EnableRadiusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<EnableRadiusInput, EnableRadiusOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnableRadiusInput, EnableRadiusOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
