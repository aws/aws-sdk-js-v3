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

import { UpdateFindingAggregatorRequest, UpdateFindingAggregatorResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateFindingAggregatorCommand,
  serializeAws_restJson1UpdateFindingAggregatorCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

export interface UpdateFindingAggregatorCommandInput extends UpdateFindingAggregatorRequest {}
export interface UpdateFindingAggregatorCommandOutput extends UpdateFindingAggregatorResponse, __MetadataBearer {}

/**
 * <p>Updates the finding aggregation configuration. Used to update the Region linking mode and the list of included or excluded Regions. You cannot use <code>UpdateFindingAggregator</code> to change the aggregation Region.</p>
 *          <p>You must run <code>UpdateFindingAggregator</code> from the current aggregation Region.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateFindingAggregatorCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateFindingAggregatorCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new UpdateFindingAggregatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFindingAggregatorCommandInput} for command's `input` shape.
 * @see {@link UpdateFindingAggregatorCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateFindingAggregatorCommand extends $Command<
  UpdateFindingAggregatorCommandInput,
  UpdateFindingAggregatorCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFindingAggregatorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFindingAggregatorCommandInput, UpdateFindingAggregatorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "UpdateFindingAggregatorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFindingAggregatorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFindingAggregatorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFindingAggregatorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateFindingAggregatorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFindingAggregatorCommandOutput> {
    return deserializeAws_restJson1UpdateFindingAggregatorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
