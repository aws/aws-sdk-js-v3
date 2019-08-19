import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListSigningPlatforms } from "../model/operations/ListSigningPlatforms";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSigningPlatformsInput } from "../types/ListSigningPlatformsInput";
import { ListSigningPlatformsOutput } from "../types/ListSigningPlatformsOutput";
import { signerResolvedConfiguration } from "../signerConfiguration";
export * from "../types/ListSigningPlatformsInput";
export * from "../types/ListSigningPlatformsOutput";
export * from "../types/ListSigningPlatformsExceptionsUnion";

export class ListSigningPlatformsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSigningPlatformsInput,
      OutputTypesUnion,
      ListSigningPlatformsOutput,
      signerResolvedConfiguration,
      Blob
    > {
  readonly model = ListSigningPlatforms;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSigningPlatformsInput,
    ListSigningPlatformsOutput,
    Blob
  >();

  constructor(readonly input: ListSigningPlatformsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: signerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSigningPlatformsInput,
    ListSigningPlatformsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSigningPlatformsInput, ListSigningPlatformsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
