import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeCertificates } from "../model/operations/DescribeCertificates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCertificatesInput } from "../types/DescribeCertificatesInput";
import { DescribeCertificatesOutput } from "../types/DescribeCertificatesOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/DescribeCertificatesInput";
export * from "../types/DescribeCertificatesOutput";
export * from "../types/DescribeCertificatesExceptionsUnion";

export class DescribeCertificatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCertificatesInput,
      OutputTypesUnion,
      DescribeCertificatesOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeCertificates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCertificatesInput,
    DescribeCertificatesOutput,
    Blob
  >();

  constructor(readonly input: DescribeCertificatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCertificatesInput,
    DescribeCertificatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeCertificatesInput, DescribeCertificatesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
