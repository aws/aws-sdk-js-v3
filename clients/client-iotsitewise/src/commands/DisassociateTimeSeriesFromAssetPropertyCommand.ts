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
  DisassociateTimeSeriesFromAssetPropertyRequest,
  DisassociateTimeSeriesFromAssetPropertyRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateTimeSeriesFromAssetPropertyCommand,
  serializeAws_restJson1DisassociateTimeSeriesFromAssetPropertyCommand,
} from "../protocols/Aws_restJson1";

export interface DisassociateTimeSeriesFromAssetPropertyCommandInput
  extends DisassociateTimeSeriesFromAssetPropertyRequest {}
export interface DisassociateTimeSeriesFromAssetPropertyCommandOutput extends __MetadataBearer {}

/**
 * <p>Disassociates a time series (data stream) from an asset property.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DisassociateTimeSeriesFromAssetPropertyCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DisassociateTimeSeriesFromAssetPropertyCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DisassociateTimeSeriesFromAssetPropertyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateTimeSeriesFromAssetPropertyCommandInput} for command's `input` shape.
 * @see {@link DisassociateTimeSeriesFromAssetPropertyCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 */
export class DisassociateTimeSeriesFromAssetPropertyCommand extends $Command<
  DisassociateTimeSeriesFromAssetPropertyCommandInput,
  DisassociateTimeSeriesFromAssetPropertyCommandOutput,
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

  constructor(readonly input: DisassociateTimeSeriesFromAssetPropertyCommandInput) {
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
  ): Handler<
    DisassociateTimeSeriesFromAssetPropertyCommandInput,
    DisassociateTimeSeriesFromAssetPropertyCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DisassociateTimeSeriesFromAssetPropertyCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "DisassociateTimeSeriesFromAssetPropertyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateTimeSeriesFromAssetPropertyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateTimeSeriesFromAssetPropertyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateTimeSeriesFromAssetPropertyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateTimeSeriesFromAssetPropertyCommandOutput> {
    return deserializeAws_restJson1DisassociateTimeSeriesFromAssetPropertyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
