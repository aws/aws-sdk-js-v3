import {
  AutoScalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../AutoScalingClient";
import {
  BatchPutScheduledUpdateGroupActionAnswer,
  BatchPutScheduledUpdateGroupActionType
} from "../models/index";
import {
  deserializeAws_queryBatchPutScheduledUpdateGroupActionCommand,
  serializeAws_queryBatchPutScheduledUpdateGroupActionCommand
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type BatchPutScheduledUpdateGroupActionCommandInput = BatchPutScheduledUpdateGroupActionType;
export type BatchPutScheduledUpdateGroupActionCommandOutput = BatchPutScheduledUpdateGroupActionAnswer &
  __MetadataBearer;

export class BatchPutScheduledUpdateGroupActionCommand extends $Command<
  BatchPutScheduledUpdateGroupActionCommandInput,
  BatchPutScheduledUpdateGroupActionCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchPutScheduledUpdateGroupActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    BatchPutScheduledUpdateGroupActionCommandInput,
    BatchPutScheduledUpdateGroupActionCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchPutScheduledUpdateGroupActionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryBatchPutScheduledUpdateGroupActionCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchPutScheduledUpdateGroupActionCommandOutput> {
    return deserializeAws_queryBatchPutScheduledUpdateGroupActionCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
