import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CancelReservedInstancesListing } from "../model/operations/CancelReservedInstancesListing";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelReservedInstancesListingInput } from "../types/CancelReservedInstancesListingInput";
import { CancelReservedInstancesListingOutput } from "../types/CancelReservedInstancesListingOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CancelReservedInstancesListingInput";
export * from "../types/CancelReservedInstancesListingOutput";
export * from "../types/CancelReservedInstancesListingExceptionsUnion";

export class CancelReservedInstancesListingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelReservedInstancesListingInput,
      OutputTypesUnion,
      CancelReservedInstancesListingOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CancelReservedInstancesListing;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelReservedInstancesListingInput,
    CancelReservedInstancesListingOutput,
    _stream.Readable
  >();

  constructor(readonly input: CancelReservedInstancesListingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CancelReservedInstancesListingInput,
    CancelReservedInstancesListingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CancelReservedInstancesListingInput,
        CancelReservedInstancesListingOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
