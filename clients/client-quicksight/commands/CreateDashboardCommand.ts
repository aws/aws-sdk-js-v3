import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { CreateDashboardRequest, CreateDashboardResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateDashboardCommand,
  serializeAws_restJson1CreateDashboardCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type CreateDashboardCommandInput = CreateDashboardRequest;
export type CreateDashboardCommandOutput = CreateDashboardResponse & __MetadataBearer;

/**
 * <p>Creates a dashboard from a template. To first create a template, see the <code>
 *                <a>CreateTemplate</a>
 *             </code> API operation.</p>
 *         <p>A dashboard is an entity in QuickSight that identifies QuickSight reports, created
 *             from analyses. You can share QuickSight dashboards. With the right permissions, you can
 *             create scheduled email reports from them. If you have the correct permissions, you can
 *             create a dashboard from a template that exists in a different AWS account.</p>
 */
export class CreateDashboardCommand extends $Command<
  CreateDashboardCommandInput,
  CreateDashboardCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDashboardCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDashboardCommandInput, CreateDashboardCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "CreateDashboardCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDashboardRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDashboardResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDashboardCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDashboardCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDashboardCommandOutput> {
    return deserializeAws_restJson1CreateDashboardCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
