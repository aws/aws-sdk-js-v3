import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterElasticIp } from "../model/RegisterElasticIp";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterElasticIpInput } from "../types/RegisterElasticIpInput";
import { RegisterElasticIpOutput } from "../types/RegisterElasticIpOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/RegisterElasticIpInput";
export * from "../types/RegisterElasticIpOutput";
export * from "../types/RegisterElasticIpExceptionsUnion";

export class RegisterElasticIpCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterElasticIpInput,
      OutputTypesUnion,
      RegisterElasticIpOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = RegisterElasticIp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterElasticIpInput,
    RegisterElasticIpOutput,
    Blob
  >();

  constructor(readonly input: RegisterElasticIpInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<RegisterElasticIpInput, RegisterElasticIpOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterElasticIpInput, RegisterElasticIpOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
