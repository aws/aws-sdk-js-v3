// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import {
  StopLoggingRequest,
  StopLoggingRequestFilterSensitiveLog,
  StopLoggingResponse,
  StopLoggingResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StopLoggingCommand,
  serializeAws_json1_1StopLoggingCommand,
} from "../protocols/Aws_json1_1";

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
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 */
export class StopLoggingCommand extends $Command<
  StopLoggingCommandInput,
  StopLoggingCommandOutput,
  CloudTrailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(getEndpointPlugin(configuration, StopLoggingCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "StopLoggingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopLoggingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopLoggingResponseFilterSensitiveLog,
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
