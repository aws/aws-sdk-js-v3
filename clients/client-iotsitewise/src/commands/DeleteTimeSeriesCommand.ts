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
import { DeleteTimeSeriesRequest, DeleteTimeSeriesRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteTimeSeriesCommand,
  serializeAws_restJson1DeleteTimeSeriesCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteTimeSeriesCommandInput extends DeleteTimeSeriesRequest {}
export interface DeleteTimeSeriesCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a time series (data stream). If you delete a time series that's associated with an
 *       asset property, the asset property still exists, but the time series will no longer be
 *       associated with this asset property.</p>
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
 * import { IoTSiteWiseClient, DeleteTimeSeriesCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DeleteTimeSeriesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DeleteTimeSeriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTimeSeriesCommandInput} for command's `input` shape.
 * @see {@link DeleteTimeSeriesCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 */
export class DeleteTimeSeriesCommand extends $Command<
  DeleteTimeSeriesCommandInput,
  DeleteTimeSeriesCommandOutput,
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

  constructor(readonly input: DeleteTimeSeriesCommandInput) {
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
  ): Handler<DeleteTimeSeriesCommandInput, DeleteTimeSeriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteTimeSeriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "DeleteTimeSeriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTimeSeriesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTimeSeriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteTimeSeriesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTimeSeriesCommandOutput> {
    return deserializeAws_restJson1DeleteTimeSeriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
