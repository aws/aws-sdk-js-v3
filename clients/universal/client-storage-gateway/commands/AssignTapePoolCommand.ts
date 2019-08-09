import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssignTapePool } from "../model/AssignTapePool";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssignTapePoolInput } from "../types/AssignTapePoolInput";
import { AssignTapePoolOutput } from "../types/AssignTapePoolOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/AssignTapePoolInput";
export * from "../types/AssignTapePoolOutput";
export * from "../types/AssignTapePoolExceptionsUnion";

export class AssignTapePoolCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssignTapePoolInput,
      OutputTypesUnion,
      AssignTapePoolOutput,
      StorageGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AssignTapePool;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssignTapePoolInput,
    AssignTapePoolOutput,
    Uint8Array
  >();

  constructor(readonly input: AssignTapePoolInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<AssignTapePoolInput, AssignTapePoolOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssignTapePoolInput, AssignTapePoolOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
