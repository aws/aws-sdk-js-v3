import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeMesh } from "../model/operations/DescribeMesh";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMeshInput } from "../types/DescribeMeshInput";
import { DescribeMeshOutput } from "../types/DescribeMeshOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/DescribeMeshInput";
export * from "../types/DescribeMeshOutput";
export * from "../types/DescribeMeshExceptionsUnion";

export class DescribeMeshCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMeshInput,
      OutputTypesUnion,
      DescribeMeshOutput,
      AppMeshResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeMesh;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMeshInput,
    DescribeMeshOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeMeshInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeMeshInput, DescribeMeshOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeMeshInput, DescribeMeshOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
