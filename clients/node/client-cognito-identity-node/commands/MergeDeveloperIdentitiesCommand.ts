import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { MergeDeveloperIdentities } from "../model/operations/MergeDeveloperIdentities";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { MergeDeveloperIdentitiesInput } from "../types/MergeDeveloperIdentitiesInput";
import { MergeDeveloperIdentitiesOutput } from "../types/MergeDeveloperIdentitiesOutput";
import { CognitoIdentityResolvedConfiguration } from "../CognitoIdentityConfiguration";
export * from "../types/MergeDeveloperIdentitiesInput";
export * from "../types/MergeDeveloperIdentitiesOutput";
export * from "../types/MergeDeveloperIdentitiesExceptionsUnion";

export class MergeDeveloperIdentitiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      MergeDeveloperIdentitiesInput,
      OutputTypesUnion,
      MergeDeveloperIdentitiesOutput,
      CognitoIdentityResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = MergeDeveloperIdentities;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    MergeDeveloperIdentitiesInput,
    MergeDeveloperIdentitiesOutput,
    _stream.Readable
  >();

  constructor(readonly input: MergeDeveloperIdentitiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CognitoIdentityResolvedConfiguration
  ): __aws_sdk_types.Handler<
    MergeDeveloperIdentitiesInput,
    MergeDeveloperIdentitiesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<MergeDeveloperIdentitiesInput, MergeDeveloperIdentitiesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
