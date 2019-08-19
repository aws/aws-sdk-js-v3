import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssociateS3Resources } from "../model/operations/AssociateS3Resources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateS3ResourcesInput } from "../types/AssociateS3ResourcesInput";
import { AssociateS3ResourcesOutput } from "../types/AssociateS3ResourcesOutput";
import { MacieResolvedConfiguration } from "../MacieConfiguration";
export * from "../types/AssociateS3ResourcesInput";
export * from "../types/AssociateS3ResourcesOutput";
export * from "../types/AssociateS3ResourcesExceptionsUnion";

export class AssociateS3ResourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateS3ResourcesInput,
      OutputTypesUnion,
      AssociateS3ResourcesOutput,
      MacieResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssociateS3Resources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateS3ResourcesInput,
    AssociateS3ResourcesOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssociateS3ResourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MacieResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateS3ResourcesInput,
    AssociateS3ResourcesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateS3ResourcesInput, AssociateS3ResourcesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
