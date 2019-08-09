import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetOnPremisesInstance } from "../model/GetOnPremisesInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetOnPremisesInstanceInput } from "../types/GetOnPremisesInstanceInput";
import { GetOnPremisesInstanceOutput } from "../types/GetOnPremisesInstanceOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/GetOnPremisesInstanceInput";
export * from "../types/GetOnPremisesInstanceOutput";
export * from "../types/GetOnPremisesInstanceExceptionsUnion";

export class GetOnPremisesInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetOnPremisesInstanceInput,
      OutputTypesUnion,
      GetOnPremisesInstanceOutput,
      CodeDeployResolvedConfiguration,
      Blob
    > {
  readonly model = GetOnPremisesInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetOnPremisesInstanceInput,
    GetOnPremisesInstanceOutput,
    Blob
  >();

  constructor(readonly input: GetOnPremisesInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetOnPremisesInstanceInput,
    GetOnPremisesInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetOnPremisesInstanceInput, GetOnPremisesInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
