import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateElasticIp } from "../model/DisassociateElasticIp";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateElasticIpInput } from "../types/DisassociateElasticIpInput";
import { DisassociateElasticIpOutput } from "../types/DisassociateElasticIpOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DisassociateElasticIpInput";
export * from "../types/DisassociateElasticIpOutput";
export * from "../types/DisassociateElasticIpExceptionsUnion";

export class DisassociateElasticIpCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateElasticIpInput,
      OutputTypesUnion,
      DisassociateElasticIpOutput,
      OpsWorksResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DisassociateElasticIp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateElasticIpInput,
    DisassociateElasticIpOutput,
    Uint8Array
  >();

  constructor(readonly input: DisassociateElasticIpInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateElasticIpInput,
    DisassociateElasticIpOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisassociateElasticIpInput, DisassociateElasticIpOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
