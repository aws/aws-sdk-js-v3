import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { StopLoggingRequest, StopLoggingResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StopLoggingCommand,
  serializeAws_json1_1StopLoggingCommand,
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

export interface StopLoggingCommandInput extends StopLoggingRequest {}
export interface StopLoggingCommandOutput extends StopLoggingResponse, __MetadataBearer {}

/**
 * <p>Suspends the recording of Amazon Web Services API calls and log file delivery for the specified trail.
 *          Under most circumstances, there is no need to use this action. You can update a trail
 *          without stopping it first. This action is the only way to stop recording. For a trail
 *          enabled in all regions, this operation must be called from the region in which the trail
 *          was created, or an <code>InvalidHomeRegionException</code> will occur. This operation
 *          cannot be called on the shadow trails (replicated trails in other regions) of a trail
 *          enabled in all regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, StopLoggingCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, StopLoggingCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new StopLoggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopLoggingCommandInput} for command's `input` shape.
 * @see {@link StopLoggingCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StopLoggingCommand extends $Command<
  StopLoggingCommandInput,
  StopLoggingCommandOutput,
  CloudTrailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopLoggingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopLoggingCommandInput, StopLoggingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "StopLoggingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopLoggingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopLoggingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopLoggingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopLoggingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopLoggingCommandOutput> {
    return deserializeAws_json1_1StopLoggingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
