import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListMissionProfiles } from "../model/ListMissionProfiles";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListMissionProfilesInput } from "../types/ListMissionProfilesInput";
import { ListMissionProfilesOutput } from "../types/ListMissionProfilesOutput";
import { GroundStationResolvedConfiguration } from "../GroundStationConfiguration";
export * from "../types/ListMissionProfilesInput";
export * from "../types/ListMissionProfilesOutput";
export * from "../types/ListMissionProfilesExceptionsUnion";

export class ListMissionProfilesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListMissionProfilesInput,
      OutputTypesUnion,
      ListMissionProfilesOutput,
      GroundStationResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListMissionProfiles;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListMissionProfilesInput,
    ListMissionProfilesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListMissionProfilesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GroundStationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListMissionProfilesInput,
    ListMissionProfilesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListMissionProfilesInput, ListMissionProfilesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
