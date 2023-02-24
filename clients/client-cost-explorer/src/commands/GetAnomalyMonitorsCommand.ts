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
  GetAnomalyMonitorsRequest,
  GetAnomalyMonitorsRequestFilterSensitiveLog,
  GetAnomalyMonitorsResponse,
  GetAnomalyMonitorsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetAnomalyMonitorsCommand,
  serializeAws_json1_1GetAnomalyMonitorsCommand,
} from "../protocols/Aws_json1_1";

export interface GetAnomalyMonitorsCommandInput extends GetAnomalyMonitorsRequest {}
export interface GetAnomalyMonitorsCommandOutput extends GetAnomalyMonitorsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the cost anomaly monitor definitions for your account. You can filter using a
 *       list of cost anomaly monitor Amazon Resource Names (ARNs). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetAnomalyMonitorsCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetAnomalyMonitorsCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetAnomalyMonitorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAnomalyMonitorsCommandInput} for command's `input` shape.
 * @see {@link GetAnomalyMonitorsCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 */
export class GetAnomalyMonitorsCommand extends $Command<
  GetAnomalyMonitorsCommandInput,
  GetAnomalyMonitorsCommandOutput,
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

  constructor(readonly input: GetAnomalyMonitorsCommandInput) {
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
  ): Handler<GetAnomalyMonitorsCommandInput, GetAnomalyMonitorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAnomalyMonitorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetAnomalyMonitorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAnomalyMonitorsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetAnomalyMonitorsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAnomalyMonitorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAnomalyMonitorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAnomalyMonitorsCommandOutput> {
    return deserializeAws_json1_1GetAnomalyMonitorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
