import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListSimulationApplications } from "../model/operations/ListSimulationApplications";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSimulationApplicationsInput } from "../types/ListSimulationApplicationsInput";
import { ListSimulationApplicationsOutput } from "../types/ListSimulationApplicationsOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/ListSimulationApplicationsInput";
export * from "../types/ListSimulationApplicationsOutput";
export * from "../types/ListSimulationApplicationsExceptionsUnion";

export class ListSimulationApplicationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSimulationApplicationsInput,
      OutputTypesUnion,
      ListSimulationApplicationsOutput,
      RoboMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListSimulationApplications;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSimulationApplicationsInput,
    ListSimulationApplicationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListSimulationApplicationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSimulationApplicationsInput,
    ListSimulationApplicationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListSimulationApplicationsInput,
        ListSimulationApplicationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
