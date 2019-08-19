import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisassociateIpGroups } from "../model/operations/DisassociateIpGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateIpGroupsInput } from "../types/DisassociateIpGroupsInput";
import { DisassociateIpGroupsOutput } from "../types/DisassociateIpGroupsOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/DisassociateIpGroupsInput";
export * from "../types/DisassociateIpGroupsOutput";
export * from "../types/DisassociateIpGroupsExceptionsUnion";

export class DisassociateIpGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateIpGroupsInput,
      OutputTypesUnion,
      DisassociateIpGroupsOutput,
      WorkSpacesResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisassociateIpGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateIpGroupsInput,
    DisassociateIpGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisassociateIpGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateIpGroupsInput,
    DisassociateIpGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisassociateIpGroupsInput, DisassociateIpGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
