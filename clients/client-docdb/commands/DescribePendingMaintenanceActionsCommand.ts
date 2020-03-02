import {
  DocDBClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DocDBClient";
import {
  DescribePendingMaintenanceActionsMessage,
  PendingMaintenanceActionsMessage
} from "../models/index";
import {
  deserializeAws_queryDescribePendingMaintenanceActionsCommand,
  serializeAws_queryDescribePendingMaintenanceActionsCommand
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

export type DescribePendingMaintenanceActionsCommandInput = DescribePendingMaintenanceActionsMessage;
export type DescribePendingMaintenanceActionsCommandOutput = PendingMaintenanceActionsMessage &
  __MetadataBearer;

export class DescribePendingMaintenanceActionsCommand extends $Command<
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput,
  DocDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePendingMaintenanceActionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribePendingMaintenanceActionsCommandInput,
    DescribePendingMaintenanceActionsCommandOutput
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
    input: DescribePendingMaintenanceActionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribePendingMaintenanceActionsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePendingMaintenanceActionsCommandOutput> {
    return deserializeAws_queryDescribePendingMaintenanceActionsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
