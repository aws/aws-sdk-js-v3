import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeDomainControllers } from "../model/operations/DescribeDomainControllers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDomainControllersInput } from "../types/DescribeDomainControllersInput";
import { DescribeDomainControllersOutput } from "../types/DescribeDomainControllersOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/DescribeDomainControllersInput";
export * from "../types/DescribeDomainControllersOutput";
export * from "../types/DescribeDomainControllersExceptionsUnion";

export class DescribeDomainControllersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDomainControllersInput,
      OutputTypesUnion,
      DescribeDomainControllersOutput,
      DirectoryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeDomainControllers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDomainControllersInput,
    DescribeDomainControllersOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeDomainControllersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDomainControllersInput,
    DescribeDomainControllersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDomainControllersInput, DescribeDomainControllersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
