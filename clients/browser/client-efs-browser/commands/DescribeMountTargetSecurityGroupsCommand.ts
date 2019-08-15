import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeMountTargetSecurityGroups } from "../model/operations/DescribeMountTargetSecurityGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMountTargetSecurityGroupsInput } from "../types/DescribeMountTargetSecurityGroupsInput";
import { DescribeMountTargetSecurityGroupsOutput } from "../types/DescribeMountTargetSecurityGroupsOutput";
import { EFSResolvedConfiguration } from "../EFSConfiguration";
export * from "../types/DescribeMountTargetSecurityGroupsInput";
export * from "../types/DescribeMountTargetSecurityGroupsOutput";
export * from "../types/DescribeMountTargetSecurityGroupsExceptionsUnion";

export class DescribeMountTargetSecurityGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMountTargetSecurityGroupsInput,
      OutputTypesUnion,
      DescribeMountTargetSecurityGroupsOutput,
      EFSResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeMountTargetSecurityGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMountTargetSecurityGroupsInput,
    DescribeMountTargetSecurityGroupsOutput,
    Blob
  >();

  constructor(readonly input: DescribeMountTargetSecurityGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EFSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeMountTargetSecurityGroupsInput,
    DescribeMountTargetSecurityGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeMountTargetSecurityGroupsInput,
        DescribeMountTargetSecurityGroupsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
