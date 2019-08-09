import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyDBCluster } from "../model/ModifyDBCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyDBClusterInput } from "../types/ModifyDBClusterInput";
import { ModifyDBClusterOutput } from "../types/ModifyDBClusterOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/ModifyDBClusterInput";
export * from "../types/ModifyDBClusterOutput";
export * from "../types/ModifyDBClusterExceptionsUnion";

export class ModifyDBClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyDBClusterInput,
      OutputTypesUnion,
      ModifyDBClusterOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyDBCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyDBClusterInput,
    ModifyDBClusterOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyDBClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<ModifyDBClusterInput, ModifyDBClusterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyDBClusterInput, ModifyDBClusterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
