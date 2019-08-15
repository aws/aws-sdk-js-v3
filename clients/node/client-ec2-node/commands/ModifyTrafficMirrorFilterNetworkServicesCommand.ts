import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyTrafficMirrorFilterNetworkServices } from "../model/operations/ModifyTrafficMirrorFilterNetworkServices";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyTrafficMirrorFilterNetworkServicesInput } from "../types/ModifyTrafficMirrorFilterNetworkServicesInput";
import { ModifyTrafficMirrorFilterNetworkServicesOutput } from "../types/ModifyTrafficMirrorFilterNetworkServicesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyTrafficMirrorFilterNetworkServicesInput";
export * from "../types/ModifyTrafficMirrorFilterNetworkServicesOutput";
export * from "../types/ModifyTrafficMirrorFilterNetworkServicesExceptionsUnion";

export class ModifyTrafficMirrorFilterNetworkServicesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyTrafficMirrorFilterNetworkServicesInput,
      OutputTypesUnion,
      ModifyTrafficMirrorFilterNetworkServicesOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyTrafficMirrorFilterNetworkServices;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyTrafficMirrorFilterNetworkServicesInput,
    ModifyTrafficMirrorFilterNetworkServicesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyTrafficMirrorFilterNetworkServicesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyTrafficMirrorFilterNetworkServicesInput,
    ModifyTrafficMirrorFilterNetworkServicesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifyTrafficMirrorFilterNetworkServicesInput,
        ModifyTrafficMirrorFilterNetworkServicesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
