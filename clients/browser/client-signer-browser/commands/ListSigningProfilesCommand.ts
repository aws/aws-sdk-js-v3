import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListSigningProfiles } from "../model/operations/ListSigningProfiles";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSigningProfilesInput } from "../types/ListSigningProfilesInput";
import { ListSigningProfilesOutput } from "../types/ListSigningProfilesOutput";
import { signerResolvedConfiguration } from "../signerConfiguration";
export * from "../types/ListSigningProfilesInput";
export * from "../types/ListSigningProfilesOutput";
export * from "../types/ListSigningProfilesExceptionsUnion";

export class ListSigningProfilesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSigningProfilesInput,
      OutputTypesUnion,
      ListSigningProfilesOutput,
      signerResolvedConfiguration,
      Blob
    > {
  readonly model = ListSigningProfiles;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSigningProfilesInput,
    ListSigningProfilesOutput,
    Blob
  >();

  constructor(readonly input: ListSigningProfilesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: signerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSigningProfilesInput,
    ListSigningProfilesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSigningProfilesInput, ListSigningProfilesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
