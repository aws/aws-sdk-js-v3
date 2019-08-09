import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RegisterEcsCluster } from "../model/RegisterEcsCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterEcsClusterInput } from "../types/RegisterEcsClusterInput";
import { RegisterEcsClusterOutput } from "../types/RegisterEcsClusterOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/RegisterEcsClusterInput";
export * from "../types/RegisterEcsClusterOutput";
export * from "../types/RegisterEcsClusterExceptionsUnion";

export class RegisterEcsClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterEcsClusterInput,
      OutputTypesUnion,
      RegisterEcsClusterOutput,
      OpsWorksResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RegisterEcsCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterEcsClusterInput,
    RegisterEcsClusterOutput,
    _stream.Readable
  >();

  constructor(readonly input: RegisterEcsClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RegisterEcsClusterInput,
    RegisterEcsClusterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterEcsClusterInput, RegisterEcsClusterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
