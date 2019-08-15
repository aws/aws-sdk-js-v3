import * as __aws_sdk_middleware_rds_presignedurl from "@aws-sdk/middleware-rds-presignedurl";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDBInstanceReadReplica } from "../model/operations/CreateDBInstanceReadReplica";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDBInstanceReadReplicaInput } from "../types/CreateDBInstanceReadReplicaInput";
import { CreateDBInstanceReadReplicaOutput } from "../types/CreateDBInstanceReadReplicaOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/CreateDBInstanceReadReplicaInput";
export * from "../types/CreateDBInstanceReadReplicaOutput";
export * from "../types/CreateDBInstanceReadReplicaExceptionsUnion";

export class CreateDBInstanceReadReplicaCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDBInstanceReadReplicaInput,
      OutputTypesUnion,
      CreateDBInstanceReadReplicaOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDBInstanceReadReplica;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDBInstanceReadReplicaInput,
    CreateDBInstanceReadReplicaOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDBInstanceReadReplicaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDBInstanceReadReplicaInput,
    CreateDBInstanceReadReplicaOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_middleware_rds_presignedurl.buildCrossRegionPresignedUrl({
        sourceIdentifierKey: "SourceDBInstanceIdentifier",
        region: configuration.region,
        credentials: configuration.credentials,
        endpoint: configuration.endpoint,
        base64Encoder: configuration.base64Encoder,
        utf8Decoder: configuration.utf8Decoder,
        sha256: configuration.sha256
      }),
      {
        step: "initialize",
        priority: 0,
        tags: { PRESIGNED_URL: true }
      }
    );
    return stack.resolve(
      handler<
        CreateDBInstanceReadReplicaInput,
        CreateDBInstanceReadReplicaOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
