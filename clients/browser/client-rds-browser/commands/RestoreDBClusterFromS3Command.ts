import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RestoreDBClusterFromS3 } from "../model/RestoreDBClusterFromS3";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RestoreDBClusterFromS3Input } from "../types/RestoreDBClusterFromS3Input";
import { RestoreDBClusterFromS3Output } from "../types/RestoreDBClusterFromS3Output";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/RestoreDBClusterFromS3Input";
export * from "../types/RestoreDBClusterFromS3Output";
export * from "../types/RestoreDBClusterFromS3ExceptionsUnion";

export class RestoreDBClusterFromS3Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RestoreDBClusterFromS3Input,
      OutputTypesUnion,
      RestoreDBClusterFromS3Output,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = RestoreDBClusterFromS3;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RestoreDBClusterFromS3Input,
    RestoreDBClusterFromS3Output,
    Blob
  >();

  constructor(readonly input: RestoreDBClusterFromS3Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RestoreDBClusterFromS3Input,
    RestoreDBClusterFromS3Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RestoreDBClusterFromS3Input, RestoreDBClusterFromS3Output>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
