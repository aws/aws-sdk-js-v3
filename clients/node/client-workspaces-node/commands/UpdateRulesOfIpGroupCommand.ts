import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateRulesOfIpGroup } from "../model/operations/UpdateRulesOfIpGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRulesOfIpGroupInput } from "../types/UpdateRulesOfIpGroupInput";
import { UpdateRulesOfIpGroupOutput } from "../types/UpdateRulesOfIpGroupOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/UpdateRulesOfIpGroupInput";
export * from "../types/UpdateRulesOfIpGroupOutput";
export * from "../types/UpdateRulesOfIpGroupExceptionsUnion";

export class UpdateRulesOfIpGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRulesOfIpGroupInput,
      OutputTypesUnion,
      UpdateRulesOfIpGroupOutput,
      WorkSpacesResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateRulesOfIpGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRulesOfIpGroupInput,
    UpdateRulesOfIpGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateRulesOfIpGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateRulesOfIpGroupInput,
    UpdateRulesOfIpGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateRulesOfIpGroupInput, UpdateRulesOfIpGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
