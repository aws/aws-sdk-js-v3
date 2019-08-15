import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetCloudFormationStackRecords } from "../model/operations/GetCloudFormationStackRecords";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCloudFormationStackRecordsInput } from "../types/GetCloudFormationStackRecordsInput";
import { GetCloudFormationStackRecordsOutput } from "../types/GetCloudFormationStackRecordsOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetCloudFormationStackRecordsInput";
export * from "../types/GetCloudFormationStackRecordsOutput";
export * from "../types/GetCloudFormationStackRecordsExceptionsUnion";

export class GetCloudFormationStackRecordsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCloudFormationStackRecordsInput,
      OutputTypesUnion,
      GetCloudFormationStackRecordsOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = GetCloudFormationStackRecords;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCloudFormationStackRecordsInput,
    GetCloudFormationStackRecordsOutput,
    Blob
  >();

  constructor(readonly input: GetCloudFormationStackRecordsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCloudFormationStackRecordsInput,
    GetCloudFormationStackRecordsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetCloudFormationStackRecordsInput,
        GetCloudFormationStackRecordsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
