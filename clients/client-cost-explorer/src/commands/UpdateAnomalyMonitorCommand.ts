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

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import {
  UpdateAnomalyMonitorRequest,
  UpdateAnomalyMonitorRequestFilterSensitiveLog,
  UpdateAnomalyMonitorResponse,
  UpdateAnomalyMonitorResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateAnomalyMonitorCommand,
  serializeAws_json1_1UpdateAnomalyMonitorCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateAnomalyMonitorCommandInput extends UpdateAnomalyMonitorRequest {}
export interface UpdateAnomalyMonitorCommandOutput extends UpdateAnomalyMonitorResponse, __MetadataBearer {}

/**
 * <p>Updates an existing cost anomaly monitor. The changes made are applied going forward, and
 *       doesn't change anomalies detected in the past. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, UpdateAnomalyMonitorCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, UpdateAnomalyMonitorCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new UpdateAnomalyMonitorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAnomalyMonitorCommandInput} for command's `input` shape.
 * @see {@link UpdateAnomalyMonitorCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 */
export class UpdateAnomalyMonitorCommand extends $Command<
  UpdateAnomalyMonitorCommandInput,
  UpdateAnomalyMonitorCommandOutput,
  CostExplorerClientResolvedConfig
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

  constructor(readonly input: UpdateAnomalyMonitorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAnomalyMonitorCommandInput, UpdateAnomalyMonitorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAnomalyMonitorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "UpdateAnomalyMonitorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAnomalyMonitorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateAnomalyMonitorResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAnomalyMonitorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateAnomalyMonitorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAnomalyMonitorCommandOutput> {
    return deserializeAws_json1_1UpdateAnomalyMonitorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
