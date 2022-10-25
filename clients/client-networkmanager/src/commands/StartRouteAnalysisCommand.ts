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

import {
  StartRouteAnalysisRequest,
  StartRouteAnalysisRequestFilterSensitiveLog,
  StartRouteAnalysisResponse,
  StartRouteAnalysisResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  deserializeAws_restJson1StartRouteAnalysisCommand,
  serializeAws_restJson1StartRouteAnalysisCommand,
} from "../protocols/Aws_restJson1";

export interface StartRouteAnalysisCommandInput extends StartRouteAnalysisRequest {}
export interface StartRouteAnalysisCommandOutput extends StartRouteAnalysisResponse, __MetadataBearer {}

/**
 * <p>Starts analyzing the routing path between the specified source and destination. For more information,
 *             see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/route-analyzer.html">Route Analyzer</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, StartRouteAnalysisCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, StartRouteAnalysisCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new StartRouteAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartRouteAnalysisCommandInput} for command's `input` shape.
 * @see {@link StartRouteAnalysisCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 */
export class StartRouteAnalysisCommand extends $Command<
  StartRouteAnalysisCommandInput,
  StartRouteAnalysisCommandOutput,
  NetworkManagerClientResolvedConfig
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

  constructor(readonly input: StartRouteAnalysisCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartRouteAnalysisCommandInput, StartRouteAnalysisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartRouteAnalysisCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "StartRouteAnalysisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartRouteAnalysisRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartRouteAnalysisResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartRouteAnalysisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartRouteAnalysisCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartRouteAnalysisCommandOutput> {
    return deserializeAws_restJson1StartRouteAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
