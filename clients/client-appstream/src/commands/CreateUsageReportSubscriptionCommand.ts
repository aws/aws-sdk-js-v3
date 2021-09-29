import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { CreateUsageReportSubscriptionRequest, CreateUsageReportSubscriptionResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateUsageReportSubscriptionCommand,
  serializeAws_json1_1CreateUsageReportSubscriptionCommand,
} from "../protocols/Aws_json1_1";
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

export interface CreateUsageReportSubscriptionCommandInput extends CreateUsageReportSubscriptionRequest {}
export interface CreateUsageReportSubscriptionCommandOutput
  extends CreateUsageReportSubscriptionResult,
    __MetadataBearer {}

/**
 * <p>Creates a usage report subscription. Usage reports are generated daily.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateUsageReportSubscriptionCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateUsageReportSubscriptionCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new CreateUsageReportSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUsageReportSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateUsageReportSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateUsageReportSubscriptionCommand extends $Command<
  CreateUsageReportSubscriptionCommandInput,
  CreateUsageReportSubscriptionCommandOutput,
  AppStreamClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateUsageReportSubscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateUsageReportSubscriptionCommandInput, CreateUsageReportSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "CreateUsageReportSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateUsageReportSubscriptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateUsageReportSubscriptionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateUsageReportSubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateUsageReportSubscriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateUsageReportSubscriptionCommandOutput> {
    return deserializeAws_json1_1CreateUsageReportSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
