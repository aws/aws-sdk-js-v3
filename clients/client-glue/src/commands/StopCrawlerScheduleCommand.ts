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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  StopCrawlerScheduleRequest,
  StopCrawlerScheduleRequestFilterSensitiveLog,
  StopCrawlerScheduleResponse,
  StopCrawlerScheduleResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1StopCrawlerScheduleCommand,
  serializeAws_json1_1StopCrawlerScheduleCommand,
} from "../protocols/Aws_json1_1";

export interface StopCrawlerScheduleCommandInput extends StopCrawlerScheduleRequest {}
export interface StopCrawlerScheduleCommandOutput extends StopCrawlerScheduleResponse, __MetadataBearer {}

/**
 * <p>Sets the schedule state of the specified crawler to
 *       <code>NOT_SCHEDULED</code>, but does not stop the crawler if it is
 *       already running.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StopCrawlerScheduleCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StopCrawlerScheduleCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StopCrawlerScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopCrawlerScheduleCommandInput} for command's `input` shape.
 * @see {@link StopCrawlerScheduleCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class StopCrawlerScheduleCommand extends $Command<
  StopCrawlerScheduleCommandInput,
  StopCrawlerScheduleCommandOutput,
  GlueClientResolvedConfig
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

  constructor(readonly input: StopCrawlerScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopCrawlerScheduleCommandInput, StopCrawlerScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopCrawlerScheduleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "StopCrawlerScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopCrawlerScheduleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopCrawlerScheduleResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopCrawlerScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopCrawlerScheduleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopCrawlerScheduleCommandOutput> {
    return deserializeAws_json1_1StopCrawlerScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
