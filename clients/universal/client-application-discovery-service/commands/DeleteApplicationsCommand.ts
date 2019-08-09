import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteApplications } from "../model/DeleteApplications";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteApplicationsInput } from "../types/DeleteApplicationsInput";
import { DeleteApplicationsOutput } from "../types/DeleteApplicationsOutput";
import { ApplicationDiscoveryServiceResolvedConfiguration } from "../ApplicationDiscoveryServiceConfiguration";
export * from "../types/DeleteApplicationsInput";
export * from "../types/DeleteApplicationsOutput";
export * from "../types/DeleteApplicationsExceptionsUnion";

export class DeleteApplicationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteApplicationsInput,
      OutputTypesUnion,
      DeleteApplicationsOutput,
      ApplicationDiscoveryServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteApplications;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteApplicationsInput,
    DeleteApplicationsOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteApplicationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ApplicationDiscoveryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteApplicationsInput,
    DeleteApplicationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteApplicationsInput, DeleteApplicationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
