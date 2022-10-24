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
  UpdateCrawlerScheduleRequest,
  UpdateCrawlerScheduleRequestFilterSensitiveLog,
  UpdateCrawlerScheduleResponse,
  UpdateCrawlerScheduleResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1UpdateCrawlerScheduleCommand,
  serializeAws_json1_1UpdateCrawlerScheduleCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateCrawlerScheduleCommandInput extends UpdateCrawlerScheduleRequest {}
export interface UpdateCrawlerScheduleCommandOutput extends UpdateCrawlerScheduleResponse, __MetadataBearer {}

/**
 * <p>Updates the schedule of a crawler using a <code>cron</code> expression. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateCrawlerScheduleCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateCrawlerScheduleCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateCrawlerScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCrawlerScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateCrawlerScheduleCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class UpdateCrawlerScheduleCommand extends $Command<
  UpdateCrawlerScheduleCommandInput,
  UpdateCrawlerScheduleCommandOutput,
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

  constructor(readonly input: UpdateCrawlerScheduleCommandInput) {
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
  ): Handler<UpdateCrawlerScheduleCommandInput, UpdateCrawlerScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateCrawlerScheduleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "UpdateCrawlerScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCrawlerScheduleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateCrawlerScheduleResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateCrawlerScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateCrawlerScheduleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateCrawlerScheduleCommandOutput> {
    return deserializeAws_json1_1UpdateCrawlerScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
