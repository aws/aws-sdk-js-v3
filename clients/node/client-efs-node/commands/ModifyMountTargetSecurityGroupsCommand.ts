import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyMountTargetSecurityGroups } from "../model/operations/ModifyMountTargetSecurityGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyMountTargetSecurityGroupsInput } from "../types/ModifyMountTargetSecurityGroupsInput";
import { ModifyMountTargetSecurityGroupsOutput } from "../types/ModifyMountTargetSecurityGroupsOutput";
import { EFSResolvedConfiguration } from "../EFSConfiguration";
export * from "../types/ModifyMountTargetSecurityGroupsInput";
export * from "../types/ModifyMountTargetSecurityGroupsOutput";
export * from "../types/ModifyMountTargetSecurityGroupsExceptionsUnion";

export class ModifyMountTargetSecurityGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyMountTargetSecurityGroupsInput,
      OutputTypesUnion,
      ModifyMountTargetSecurityGroupsOutput,
      EFSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyMountTargetSecurityGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyMountTargetSecurityGroupsInput,
    ModifyMountTargetSecurityGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyMountTargetSecurityGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EFSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyMountTargetSecurityGroupsInput,
    ModifyMountTargetSecurityGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifyMountTargetSecurityGroupsInput,
        ModifyMountTargetSecurityGroupsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
