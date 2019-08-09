import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateS3Resources } from "../model/DisassociateS3Resources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateS3ResourcesInput } from "../types/DisassociateS3ResourcesInput";
import { DisassociateS3ResourcesOutput } from "../types/DisassociateS3ResourcesOutput";
import { MacieResolvedConfiguration } from "../MacieConfiguration";
export * from "../types/DisassociateS3ResourcesInput";
export * from "../types/DisassociateS3ResourcesOutput";
export * from "../types/DisassociateS3ResourcesExceptionsUnion";

export class DisassociateS3ResourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateS3ResourcesInput,
      OutputTypesUnion,
      DisassociateS3ResourcesOutput,
      MacieResolvedConfiguration,
      Blob
    > {
  readonly model = DisassociateS3Resources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateS3ResourcesInput,
    DisassociateS3ResourcesOutput,
    Blob
  >();

  constructor(readonly input: DisassociateS3ResourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MacieResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateS3ResourcesInput,
    DisassociateS3ResourcesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisassociateS3ResourcesInput, DisassociateS3ResourcesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
