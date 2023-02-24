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
  CreateAnomalyMonitorRequest,
  CreateAnomalyMonitorRequestFilterSensitiveLog,
  CreateAnomalyMonitorResponse,
  CreateAnomalyMonitorResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateAnomalyMonitorCommand,
  serializeAws_json1_1CreateAnomalyMonitorCommand,
} from "../protocols/Aws_json1_1";

export interface CreateAnomalyMonitorCommandInput extends CreateAnomalyMonitorRequest {}
export interface CreateAnomalyMonitorCommandOutput extends CreateAnomalyMonitorResponse, __MetadataBearer {}

/**
 * <p>Creates a new cost anomaly detection monitor with the requested type and monitor
 *       specification. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, CreateAnomalyMonitorCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, CreateAnomalyMonitorCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new CreateAnomalyMonitorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAnomalyMonitorCommandInput} for command's `input` shape.
 * @see {@link CreateAnomalyMonitorCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 */
export class CreateAnomalyMonitorCommand extends $Command<
  CreateAnomalyMonitorCommandInput,
  CreateAnomalyMonitorCommandOutput,
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

  constructor(readonly input: CreateAnomalyMonitorCommandInput) {
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
  ): Handler<CreateAnomalyMonitorCommandInput, CreateAnomalyMonitorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAnomalyMonitorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "CreateAnomalyMonitorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAnomalyMonitorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAnomalyMonitorResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAnomalyMonitorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAnomalyMonitorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAnomalyMonitorCommandOutput> {
    return deserializeAws_json1_1CreateAnomalyMonitorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
