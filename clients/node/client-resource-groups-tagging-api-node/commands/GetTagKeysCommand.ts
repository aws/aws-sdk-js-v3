import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetTagKeys } from "../model/GetTagKeys";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTagKeysInput } from "../types/GetTagKeysInput";
import { GetTagKeysOutput } from "../types/GetTagKeysOutput";
import { ResourceGroupsTaggingAPIResolvedConfiguration } from "../ResourceGroupsTaggingAPIConfiguration";
export * from "../types/GetTagKeysInput";
export * from "../types/GetTagKeysOutput";
export * from "../types/GetTagKeysExceptionsUnion";

export class GetTagKeysCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTagKeysInput,
      OutputTypesUnion,
      GetTagKeysOutput,
      ResourceGroupsTaggingAPIResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetTagKeys;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTagKeysInput,
    GetTagKeysOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetTagKeysInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ResourceGroupsTaggingAPIResolvedConfiguration
  ): __aws_sdk_types.Handler<GetTagKeysInput, GetTagKeysOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetTagKeysInput, GetTagKeysOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
