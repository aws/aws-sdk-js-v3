import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RestoreDBInstanceFromS3 } from "../model/RestoreDBInstanceFromS3";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RestoreDBInstanceFromS3Input } from "../types/RestoreDBInstanceFromS3Input";
import { RestoreDBInstanceFromS3Output } from "../types/RestoreDBInstanceFromS3Output";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/RestoreDBInstanceFromS3Input";
export * from "../types/RestoreDBInstanceFromS3Output";
export * from "../types/RestoreDBInstanceFromS3ExceptionsUnion";

export class RestoreDBInstanceFromS3Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RestoreDBInstanceFromS3Input,
      OutputTypesUnion,
      RestoreDBInstanceFromS3Output,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = RestoreDBInstanceFromS3;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RestoreDBInstanceFromS3Input,
    RestoreDBInstanceFromS3Output,
    Blob
  >();

  constructor(readonly input: RestoreDBInstanceFromS3Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RestoreDBInstanceFromS3Input,
    RestoreDBInstanceFromS3Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RestoreDBInstanceFromS3Input, RestoreDBInstanceFromS3Output>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
