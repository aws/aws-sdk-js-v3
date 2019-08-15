import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListModelPackages } from "../model/operations/ListModelPackages";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListModelPackagesInput } from "../types/ListModelPackagesInput";
import { ListModelPackagesOutput } from "../types/ListModelPackagesOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/ListModelPackagesInput";
export * from "../types/ListModelPackagesOutput";
export * from "../types/ListModelPackagesExceptionsUnion";

export class ListModelPackagesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListModelPackagesInput,
      OutputTypesUnion,
      ListModelPackagesOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListModelPackages;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListModelPackagesInput,
    ListModelPackagesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListModelPackagesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<ListModelPackagesInput, ListModelPackagesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListModelPackagesInput, ListModelPackagesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
