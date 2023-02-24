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

import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import {
  UpdateProjectDataDeliveryRequest,
  UpdateProjectDataDeliveryRequestFilterSensitiveLog,
  UpdateProjectDataDeliveryResponse,
  UpdateProjectDataDeliveryResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateProjectDataDeliveryCommand,
  serializeAws_restJson1UpdateProjectDataDeliveryCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateProjectDataDeliveryCommandInput extends UpdateProjectDataDeliveryRequest {}
export interface UpdateProjectDataDeliveryCommandOutput extends UpdateProjectDataDeliveryResponse, __MetadataBearer {}

/**
 * <p>Updates the data storage options for this project. If you store evaluation events, you an
 *       keep them and analyze them on your own. If you choose not to store evaluation events,
 *       Evidently deletes them after using them to produce metrics and other experiment results that
 *       you can view.</p>
 *          <p>You can't specify both <code>cloudWatchLogs</code> and <code>s3Destination</code> in the same operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, UpdateProjectDataDeliveryCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, UpdateProjectDataDeliveryCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const command = new UpdateProjectDataDeliveryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProjectDataDeliveryCommandInput} for command's `input` shape.
 * @see {@link UpdateProjectDataDeliveryCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 */
export class UpdateProjectDataDeliveryCommand extends $Command<
  UpdateProjectDataDeliveryCommandInput,
  UpdateProjectDataDeliveryCommandOutput,
  EvidentlyClientResolvedConfig
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

  constructor(readonly input: UpdateProjectDataDeliveryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EvidentlyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateProjectDataDeliveryCommandInput, UpdateProjectDataDeliveryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateProjectDataDeliveryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "UpdateProjectDataDeliveryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateProjectDataDeliveryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateProjectDataDeliveryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateProjectDataDeliveryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateProjectDataDeliveryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateProjectDataDeliveryCommandOutput> {
    return deserializeAws_restJson1UpdateProjectDataDeliveryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
