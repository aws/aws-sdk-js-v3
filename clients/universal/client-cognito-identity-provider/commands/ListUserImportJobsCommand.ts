import * as __aws_crypto_sha256_universal from "@aws-crypto/sha256-universal";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListUserImportJobs } from "../model/ListUserImportJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListUserImportJobsInput } from "../types/ListUserImportJobsInput";
import { ListUserImportJobsOutput } from "../types/ListUserImportJobsOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/ListUserImportJobsInput";
export * from "../types/ListUserImportJobsOutput";
export * from "../types/ListUserImportJobsExceptionsUnion";

export class ListUserImportJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListUserImportJobsInput,
      OutputTypesUnion,
      ListUserImportJobsOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListUserImportJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListUserImportJobsInput,
    ListUserImportJobsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListUserImportJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListUserImportJobsInput,
    ListUserImportJobsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        InputTypesUnion,
        OutputTypesUnion,
        Uint8Array
      >(this.config.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<ListUserImportJobsInput, ListUserImportJobsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
