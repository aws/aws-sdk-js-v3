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

import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import {
  DescribeTimeSeriesRequest,
  DescribeTimeSeriesRequestFilterSensitiveLog,
  DescribeTimeSeriesResponse,
  DescribeTimeSeriesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeTimeSeriesCommand,
  serializeAws_restJson1DescribeTimeSeriesCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeTimeSeriesCommandInput extends DescribeTimeSeriesRequest {}
export interface DescribeTimeSeriesCommandOutput extends DescribeTimeSeriesResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a time series (data stream).</p>
 *          <p>To identify a time series, do one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>If the time series isn't associated with an asset property,
 *           specify the <code>alias</code> of the time series.</p>
 *             </li>
 *             <li>
 *                <p>If the time series is associated with an asset property,
 *           specify one of the following: </p>
 *                <ul>
 *                   <li>
 *                      <p>The <code>alias</code> of the time series.</p>
 *                   </li>
 *                   <li>
 *                      <p>The <code>assetId</code> and <code>propertyId</code> that identifies the asset property.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeTimeSeriesCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeTimeSeriesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DescribeTimeSeriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTimeSeriesCommandInput} for command's `input` shape.
 * @see {@link DescribeTimeSeriesCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 */
export class DescribeTimeSeriesCommand extends $Command<
  DescribeTimeSeriesCommandInput,
  DescribeTimeSeriesCommandOutput,
  IoTSiteWiseClientResolvedConfig
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

  constructor(readonly input: DescribeTimeSeriesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTimeSeriesCommandInput, DescribeTimeSeriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTimeSeriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "DescribeTimeSeriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTimeSeriesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeTimeSeriesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTimeSeriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeTimeSeriesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTimeSeriesCommandOutput> {
    return deserializeAws_restJson1DescribeTimeSeriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
