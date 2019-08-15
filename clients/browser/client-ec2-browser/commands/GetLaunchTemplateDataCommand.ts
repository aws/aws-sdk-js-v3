import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetLaunchTemplateData } from "../model/operations/GetLaunchTemplateData";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetLaunchTemplateDataInput } from "../types/GetLaunchTemplateDataInput";
import { GetLaunchTemplateDataOutput } from "../types/GetLaunchTemplateDataOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/GetLaunchTemplateDataInput";
export * from "../types/GetLaunchTemplateDataOutput";
export * from "../types/GetLaunchTemplateDataExceptionsUnion";

export class GetLaunchTemplateDataCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetLaunchTemplateDataInput,
      OutputTypesUnion,
      GetLaunchTemplateDataOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = GetLaunchTemplateData;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLaunchTemplateDataInput,
    GetLaunchTemplateDataOutput,
    Blob
  >();

  constructor(readonly input: GetLaunchTemplateDataInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetLaunchTemplateDataInput,
    GetLaunchTemplateDataOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetLaunchTemplateDataInput, GetLaunchTemplateDataOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
