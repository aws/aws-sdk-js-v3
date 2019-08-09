import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetCelebrityInfo } from "../model/GetCelebrityInfo";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCelebrityInfoInput } from "../types/GetCelebrityInfoInput";
import { GetCelebrityInfoOutput } from "../types/GetCelebrityInfoOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/GetCelebrityInfoInput";
export * from "../types/GetCelebrityInfoOutput";
export * from "../types/GetCelebrityInfoExceptionsUnion";

export class GetCelebrityInfoCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCelebrityInfoInput,
      OutputTypesUnion,
      GetCelebrityInfoOutput,
      RekognitionResolvedConfiguration,
      Blob
    > {
  readonly model = GetCelebrityInfo;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCelebrityInfoInput,
    GetCelebrityInfoOutput,
    Blob
  >();

  constructor(readonly input: GetCelebrityInfoInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<GetCelebrityInfoInput, GetCelebrityInfoOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCelebrityInfoInput, GetCelebrityInfoOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
