import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateModelPackage } from "../model/CreateModelPackage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateModelPackageInput } from "../types/CreateModelPackageInput";
import { CreateModelPackageOutput } from "../types/CreateModelPackageOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/CreateModelPackageInput";
export * from "../types/CreateModelPackageOutput";
export * from "../types/CreateModelPackageExceptionsUnion";

export class CreateModelPackageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateModelPackageInput,
      OutputTypesUnion,
      CreateModelPackageOutput,
      SageMakerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateModelPackage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateModelPackageInput,
    CreateModelPackageOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateModelPackageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateModelPackageInput,
    CreateModelPackageOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateModelPackageInput, CreateModelPackageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
