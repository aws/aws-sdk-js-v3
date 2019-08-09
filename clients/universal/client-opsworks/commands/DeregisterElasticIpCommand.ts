import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeregisterElasticIp } from "../model/DeregisterElasticIp";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterElasticIpInput } from "../types/DeregisterElasticIpInput";
import { DeregisterElasticIpOutput } from "../types/DeregisterElasticIpOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DeregisterElasticIpInput";
export * from "../types/DeregisterElasticIpOutput";
export * from "../types/DeregisterElasticIpExceptionsUnion";

export class DeregisterElasticIpCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterElasticIpInput,
      OutputTypesUnion,
      DeregisterElasticIpOutput,
      OpsWorksResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeregisterElasticIp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterElasticIpInput,
    DeregisterElasticIpOutput,
    Uint8Array
  >();

  constructor(readonly input: DeregisterElasticIpInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeregisterElasticIpInput,
    DeregisterElasticIpOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeregisterElasticIpInput, DeregisterElasticIpOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
