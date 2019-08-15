import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateElasticIp } from "../model/operations/UpdateElasticIp";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateElasticIpInput } from "../types/UpdateElasticIpInput";
import { UpdateElasticIpOutput } from "../types/UpdateElasticIpOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/UpdateElasticIpInput";
export * from "../types/UpdateElasticIpOutput";
export * from "../types/UpdateElasticIpExceptionsUnion";

export class UpdateElasticIpCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateElasticIpInput,
      OutputTypesUnion,
      UpdateElasticIpOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateElasticIp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateElasticIpInput,
    UpdateElasticIpOutput,
    Blob
  >();

  constructor(readonly input: UpdateElasticIpInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateElasticIpInput, UpdateElasticIpOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateElasticIpInput, UpdateElasticIpOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
