import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssociateTagOptionWithResource } from "../model/AssociateTagOptionWithResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateTagOptionWithResourceInput } from "../types/AssociateTagOptionWithResourceInput";
import { AssociateTagOptionWithResourceOutput } from "../types/AssociateTagOptionWithResourceOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/AssociateTagOptionWithResourceInput";
export * from "../types/AssociateTagOptionWithResourceOutput";
export * from "../types/AssociateTagOptionWithResourceExceptionsUnion";

export class AssociateTagOptionWithResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateTagOptionWithResourceInput,
      OutputTypesUnion,
      AssociateTagOptionWithResourceOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssociateTagOptionWithResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateTagOptionWithResourceInput,
    AssociateTagOptionWithResourceOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssociateTagOptionWithResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateTagOptionWithResourceInput,
    AssociateTagOptionWithResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociateTagOptionWithResourceInput,
        AssociateTagOptionWithResourceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
